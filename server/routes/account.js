const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const { Account } = require("../models/Account");
const { default: mongoose } = require("mongoose");
const { User } = require("../models/User");
const router = express.Router();

// get balance route for getting user balance http://localhost:4000/api/v1/account/balance
router.get("/balance", authMiddleware, async (req, res) => {
    try {
        const account = await Account.findOne({
            userId: req.userId
        })
        const user = await User.findOne({ _id: req.userId }).select(['-password'])
        // console.log(user);
        res.json({
            balance: account.balance,
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!"
        });
    }
})

// get balance route for getting user balance http://localhost:4000/api/v1/account/transfer
router.post("/transfer", authMiddleware, async (req, res) => {
    try {
        const session = await mongoose.startSession();

        session.startTransaction();
        const { amount, to } = req.body;

        if (amount <= 0) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Enter valid amount"
            });
        }
        // fetch the accounts within the transaction
        const account = await Account.findOne({ userId: req.userId }).session(session);

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);

        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }

        // perform transfer  ($inc accept position and negative values )
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        // commit transaction
        await session.commitTransaction();
        res.json({
            message: "Transfer successful"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!"
        });
    }
})


// async function transfer(req) {
//     const session = await mongoose.startSession();

//     session.startTransaction();
//     const { amount, to } = req.body;

//     // Fetch the accounts within the transaction
//     const account = await Account.findOne({ userId: req.userId }).session(session);

//     if (!account || account.balance < amount) {
//         await session.abortTransaction();
//         console.log("Insufficient balance")
//         return;
//     }

//     const toAccount = await Account.findOne({ userId: to }).session(session);

//     if (!toAccount) {
//         await session.abortTransaction();
//         console.log("Invalid account")
//         return;
//     }

//     // Perform the transfer
//     await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
//     await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

//     // Commit the transaction
//     await session.commitTransaction();
//     console.log("done")
// }

// transfer({
//     userId: "65f29c56407f94072ede45fd",
//     body: {
//         to: "65f29ca1407f94072ede4602",
//         amount: 100
//     }
// })

// transfer({
//     userId: "65f29c56407f94072ede45fd",
//     body: {
//         to: "65f29ca1407f94072ede4602",
//         amount: 100
//     }
// })


module.exports = router;