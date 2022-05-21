const express = require("express");
const router = express.Router();


router.get("/survey",(req,res)=>{
    res.json({msg: "Ok"})
})
router.post("/survey",(req,res)=>{
    res.json({msg: "Ok"})
})





module.exports = router;