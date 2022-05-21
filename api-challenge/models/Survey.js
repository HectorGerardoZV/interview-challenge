const mongoose = require("mongoose");

const SurveySchema = mongoose.Schema({
    questionOne: {
        type: String,
        required: true,
        trim:true,
    },
    questionTwo: {
        type: String,
        required: true,
        trim:true,
    },
    created:{
        type: Date.now(),
        required:true
    }
},{
    versionKey: false
})
module.exports = mongoose.model("Survery",SurveySchema);