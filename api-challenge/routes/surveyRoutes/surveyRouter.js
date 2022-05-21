const express = require("express");
const surveyRouter = express.Router();

//Controllers
const surveyController = require("../../controllers/surveryController");
//Middlewares
const suerveyMiddleware = require("../../middlewares/surveyMiddlewares");
//Functions
const {addNewSurvey, getAllSurveys} =surveyController;
const {checkAdd} =suerveyMiddleware;


surveyRouter.get("/survey",getAllSurveys)
surveyRouter.post("/survey",checkAdd,addNewSurvey)


module.exports = surveyRouter