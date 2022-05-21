const SurveySchema = require("../models/SurveySchema");

const addNewSurvey = async(req,res)=>{
    try {
        res.json({msg: "OKII"});
        return;
        const {body} = req;
        const survey = new SurveySchema(body);
        const newSurvey = await survey.save();
        if(!newSurvey){
            res.status(401).json({});
        }
    } catch (error) {
        
    }
}

const getAllSurveys = async(req,res)=>{
    try {
        res.json({msg: "All"})
    } catch (error) {
        
    }
}

module.exports = {
    addNewSurvey,
    getAllSurveys
}
