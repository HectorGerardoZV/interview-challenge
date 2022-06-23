const checkLogin = (req,res,next)=>{
    try {
        const {body} = req;
        if(!body.hasOwnProperty("username") 
        || !body.hasOwnProperty("password")){
            return res.status(400).json({msg:"Fields are required"});
        }
        if(body.username.trim()==""
        ||body.password.trim()==""){
            return res.status(400).json({msg:"Fields are required"});
        }
        next();
        
    } catch (error) {
        res.status(500).json({msg: "Error validating login"});
    }
}
module.exports = {
    checkLogin
}