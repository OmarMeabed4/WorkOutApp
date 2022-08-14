require('dotenv').config();
const express = require("express");

const app = express();

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

app.get("/", (req, res,)=>{
    res.json({
        message:"yooo hooo droooogoz"
    });    
});

app.listen(process.env.PORT, ()=>{
    console.log("hellooooo i am  listennning to ",process.env.PORT);
});