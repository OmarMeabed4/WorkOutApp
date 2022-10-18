require('dotenv').config()
const express = require("express")
const workoutRoutes = require("./routs/workouts")
const userRouts = require("./routs/user")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRouts)

mongoose.connect(process.env.mongodb_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log("hellooooo i am conneccted to the adtabase and  listennning to " + process.env.PORT)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
