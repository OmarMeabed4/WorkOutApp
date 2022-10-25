const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const Schema = mongoose.Schema

const userSchema = new Schema(
    {
       email:{
        type: String,
        required: true,
        unique: true
       },
       password:{
        type:String,
        required: true
       } 
    }
)

userSchema.statics.signUp = async function (email, password){

    if(!email || !password){
        throw Error("all fields must be filled")
    }

    if(!validator.isEmail(email)){
        throw Error("Email is no valid")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("password is too weak")
    }

    const exists = await this.findOne({email})
    if(exists){
        throw Error("Email already innn useee")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({email, password: hash})

    return user
}

//ewqe
module.exports = mongoose.model("users", userSchema)