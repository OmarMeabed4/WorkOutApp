require('dotenv').config();
const express = require("express");
const router = require("./routs/workouts");

const app = express();

app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

app.use("/api/workouts", router);

app.listen(process.env.PORT, ()=>{
    console.log("hellooooo i am  listennning to ",process.env.PORT);
});