const express = require("express")
const { logIn, signOut } = require("../controlers/UserController")

const router = express.Router()

router.post("/login", logIn)

router.post("/signup", signOut)


module.exports = router