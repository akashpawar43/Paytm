const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const dotenv = require("dotenv").config();
const JWT_SECRTE = process.env.JWT_SECRTE;
const { User } = require("../models/User");
const { Account } = require("../models/Account");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

const singupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string().min(3),
    lastName: zod.string().min(3),
})

// POST signup route user can register using it http://localhost:4000/api/v1/user/signup
router.post("/signup", async (req, res) => {
    try {
        const { success } = singupBody.safeParse(req.body);
        if (!success) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            });
        }
        const { username, password, firstName, lastName } = req.body;
        const isPresent = await User.findOne({ username });
        if (isPresent) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            });
        }
        const salt = await bcrypt.genSalt(10);
        const secPas = await bcrypt.hash(password, salt);
        const user = await User.create({
            username: username,
            password: secPas,
            firstName: firstName,
            lastName: lastName
        });
        const userId = user._id;
        const token = jwt.sign({ userId }, JWT_SECRTE)
        
        // creating account for user with random balance from 1 to 10000 
        await Account.create({
            userId,
            balance: 1 + Math.random() * 10000
        })

        res.status(200).json({
            message: "User created successfully",
            token: token
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
});


const singinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

// POST signin route user can login/signin using it http://localhost:4000/api/v1/user/signin 
router.post("/signin", async (req, res) => {
    try {
        const { success } = singinBody.safeParse(req.body);
        if (!success) {
            return res.status(411).json({
                message: "Error while logging in"
            })
        }
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(411).json({
                message: "Error while logging in"
            })
        }
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(411).json({
                message: "Error while logging in"
            })
        }
        const userId = user._id;
        const token = jwt.sign({ userId }, JWT_SECRTE);
        res.status(200).json({
            token: token
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
})


const updateUser = zod.object({
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
})

// PUT user update route user can update uer info using it http://localhost:4000/api/v1/user/
router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateUser.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Invalid Input"
        })
    }
    try {
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt);
        const data = {
            password: secPass,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
        await User.updateOne({ _id: req.userId }, data)
        res.status(200).json({
            message: "Updated successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!"
        })
    }
})

// GET bulk route for getting all user using filter query http://localhost:4000/api/v1/user/bulk
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })
    res.status(200).json({
        users: users.map(user => ({
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
        }))
    })
})

module.exports = router;