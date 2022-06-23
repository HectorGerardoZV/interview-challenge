const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    created: {
        type: Date,
        default: Date.now()
    }
},{
    versionKey: false
})

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }
    const newPassword = await bcrypt.hashSync(this.password, 10);
    this.password = newPassword;
    next();
})

UserSchema.methods.comparePassword = async function(passwordCheck){
    return await bcrypt.compare(passwordCheck, this.password);
}

module.exports = mongoose.model("users", UserSchema);