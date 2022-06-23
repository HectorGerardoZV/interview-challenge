const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authenticate = async(req,res)=>{
    try {
        const {body} = req;
        const {username, password} = body;
        const user = await UserModel.findOne({username});
        if(!user){
            return res.status(404).json({msg: "Invalid credentials"});
        }
        if(!await user.comparePassword(password)){
            return res.status(404).json({msg: "Invalid credentials"});
        }
        const token = jwt.sign(
        {username: user.username},
        process.env.SECRET_KEY,
        {expiresIn: "3d"});

        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({msg: "Error validating credentials"});
    }
}
const checkAuh = (req,res)=>{
    try {
        let token = "";
        const { authorization} = req.headers;
        token = authorization.split(" ")[1];
        
        const user = jwt.verify(token, process.env.SECRET_KEY);
        if(!user){
            return res.status(401).json({access: false});
        }  
        res.status(200).json({access: true});
        
    } catch (error) {
        res.status(500).json({access: false});
    }
}


// const addNewUser = async(req,res)=>{
//     try {
//         const user = new UserModel(req.body);
//         await user.save({msg: "User created"});
//         res.status(200).json();
//     } catch (error) {
//         res.status(500).json({error: "Error while creating user"});
//     }
// }



module.exports = {
    authenticate,
    checkAuh,
    // addNewUser
}