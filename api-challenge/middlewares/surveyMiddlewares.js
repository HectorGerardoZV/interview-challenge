const checkAdd = (req,res,next)=>{
    try {
        const {body} = req;
        if(!body.hasOwnProperty("questionOne") 
        || !body.hasOwnProperty("questionTwo")){
            return res.status(400).json({msg:"Survey error"});
        }
        if(body.questionOne.trim()==""
        ||body.questionTwo.trim()==""){
            return res.status(400).json({msg:"Survey error"});
        }
        next();
        
    } catch (error) {
        res.status(500).json({msg: "Error validating the survey"});
    }
}


module.exports = {
    checkAdd
}