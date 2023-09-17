const express = require("express");

const userNodes = express.Router();

userNodes.post("/Node1",(req,res)=>{
    res.send("'Node post reached 💪💪💪💪💪💪💪💪")
})


userNodes.get("/Node2",(req,res)=>{
    res.send("Node get is reached successfully 😍😍😍😍😍😍")
})

module.exports=userNodes;