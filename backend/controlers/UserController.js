const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const creatToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn:"3d"})
}

const logIn = async (req, res) => {
    res.json("Logggged IN")
}

const signUp = async (req, res) => {

    const {email, password} = req.body

    try {
        const user = await User.signUp(email, password)
        const token = creatToken(user._id)
        res.status(200).json({email, user, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


module.exports = { logIn, signUp }