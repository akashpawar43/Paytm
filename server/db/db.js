const mongoose = require("mongoose");
const { MONGO_URL } = require("../config")

const connectMongo = () => {
    try {
        mongoose.connect(MONGO_URL);
        console.log("Databse is connected!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectMongo;