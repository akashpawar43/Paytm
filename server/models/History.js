const mongoose = require("mongoose");


const HistorySchema = new mongoose.Schema({
    sendId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    senderFirstName: {
        type: String,
    },
    senderLastName: {
        type: String,
    },
    receiverFirstName: {
        type: String,
    },
    receiverLastName: {
        type: String,
    },
    amount: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

const History = mongoose.model("history", HistorySchema);

module.exports = History;