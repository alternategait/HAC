const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    activityName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        require: false,
    },
    cloudinaryId: {
        type: String,
        require: false,
    },
    actDescription: {
        type: String,
        required: true,
    },
    updateActDescription: {
        type: String,
        required: false,
    },
    assistanceLevel:{
        type: [String],
        required: false,
    }, 
    actType:{
        type: [String],
        required: false,
    }, 
    patientType:{
        type: [String],
        required: false,
    }, 
    original: {
        type: Boolean,
        required: true,
    },

});

module.exports = mongoose.model("Activity", ActivitySchema);
