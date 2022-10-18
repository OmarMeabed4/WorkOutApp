const User = require("../models/userModel")

const logIn = async (req, res) => {
    res.json("Logggged IN")
}

const signUp = async (req, res) => {

    const {email, password} = req.body

    try {
        const user = await User.signUp(email, password)
        res.status(200).json({email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


module.exports = { logIn, signUp }