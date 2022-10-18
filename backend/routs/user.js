const express = require("express")
const { logIn, signUp } = require("../controlers/UserController")

const router = express.Router()

router.post("/login", logIn)

router.post("/signup", signUp)


module.exports = router