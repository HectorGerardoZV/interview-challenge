const express = require("express");
const router = express.Router();

//Routes
const surveyRouter = require("./surveyRoutes/surveyRouter");
const authRouter = require("./authRoutes/authRouter");

router.use(surveyRouter);
router.use(authRouter);


module.exports = router;