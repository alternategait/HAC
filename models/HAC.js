const mongoose = require("mongoose");

const HacSchema = new mongoose.Schema({
    HacTitle: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    HacActivity: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Activity", 
        },
    ],
    });

const HAC = mongoose.model("Hac", HacSchema);

module.exports = HAC;
