const User = require("../models/userModel")

const logIn = async (req, res) => {
    res.json("Logggged IN")
}

const signOut = async (req, res) => {
    res.json("Sigggn upt")
}


module.exports = { logIn, signOut }