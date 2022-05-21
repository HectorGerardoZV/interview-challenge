const express = require("express");
const router = express.Router();
//Controllers
const surveyController = require("../controllers/surveryController");
//Middlewares
const suerveyMiddleware = require("../middlewares/surveyMiddlewares");
//Functions
const {addNewSurvey, getAllSurveys} =surveyController;
const {checkAdd} =suerveyMiddleware;

router.get("/survey",getAllSurveys)
router.post("/survey",checkAdd,addNewSurvey)





module.exports = router;