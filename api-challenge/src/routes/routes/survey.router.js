const express = require("express");
const surveyRouter = express.Router();

//Controllers
const surveyController = require("../../controllers/survey.controller");

//Middlewares
const suerveyMiddleware = require("../../middlewares/survey.middlewares");

//Functions
const {addNewSurvey, getAllSurveys} =surveyController;
const {checkAdd} =suerveyMiddleware;

//Routes
surveyRouter.get("/survey",getAllSurveys)
surveyRouter.post("/survey",checkAdd,addNewSurvey)

//Exporting router
module.exports = surveyRouter