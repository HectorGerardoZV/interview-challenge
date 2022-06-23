const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router.router");
require("dotenv").config({path:".env"});
const dbConnection = require("./config/bdConnection");

/**
 * Application initialization.
 */
const app = express();

/**
 * Connectin with the database
 */
dbConnection();

/**
 * Adding cors and body parser.
 * body parsers added with json extention
 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/**
 * Creating Host and Port variables
 */
const PORT = process.env.PORT || 1234;
const HOST = process.env.HOST || "localhost";

/**
 * Adding router
 */
app.use("/",router);

/**
 * Starting server
 */
app.listen(PORT, HOST, ()=>{
    console.log(`Server running in ${HOST}:${PORT}`);
});
