const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;

const connectMongo = () => {
    try {
        mongoose.connect(MONGO_URL);
        console.log("Databse is connected!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectMongo;