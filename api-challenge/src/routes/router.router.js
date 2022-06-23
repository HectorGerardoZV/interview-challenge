const express = require("express");
const router = express.Router();

//Routers
const surveyRouter = require("./routes/auth.router");
const authRouter = require("./routes/survey.router");

//Routes
router.use(surveyRouter);
router.use(authRouter);

//Exporting router
module.exports = router;