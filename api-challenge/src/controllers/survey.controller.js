const SurveyModel = require("../models/survey.model");

const addNewSurvey = async(req,res)=>{
    try {
        const {body} = req;
        const survey = new SurveyModel(body);
        const newSurvey = await survey.save();
        if(!newSurvey){
            return res.status(400).json({msg: "Error when adding new survey"});
        }
        res.status(200).json({msg:"Survey added"});
    } catch (error) {
        
    }
}

const getAllSurveys = async(req,res)=>{
    try {
        const surveys = await SurveyModel.find({});
        res.status(200).json(surveys);
    } catch (error) {
        res.status(500).json({msg: "Error when consulting surveys"});
    }
}

module.exports = {
    addNewSurvey,
    getAllSurveys
}
