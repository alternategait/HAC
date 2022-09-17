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
    HacActivity: 
        [{type: mongoose.Schema.Types.ObjectId,
        ref: "Activity", }],

});

module.exports = mongoose.model("Post", PostSchema);
