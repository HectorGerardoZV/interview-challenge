const express = require("express");
const authRouter = express.Router();

//Controllers
const authController = require("../../controllers/auth.controller");

//Middlewares
const authMiddleware = require("../../middlewares/auth.middleware");

//Functions
const {checkLogin} = authMiddleware;
const {authenticate,checkAuh, /*addNewUser*/ } = authController;

//Routes
authRouter.post("/auth",checkLogin, authenticate);
authRouter.get("/auth",checkAuh);
// authRouter.post("/user", addNewUser);


//Exporting router
module.exports = authRouter;