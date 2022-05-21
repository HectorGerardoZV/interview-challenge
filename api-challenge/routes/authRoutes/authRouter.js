const express = require("express");
const authRouter = express.Router();


//Controllers
const authController = require("../../controllers/authController");
//Middlewares
const authMiddleware = require("../../middlewares/authMiddleware");
//Functions
const {checkLogin} = authMiddleware;
const {authenticate,checkAuh} = authController;

authRouter.post("/auth",checkLogin, authenticate);
authRouter.get("/auth",checkAuh);



module.exports = authRouter;