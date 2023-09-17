const express = require("express");
const data= require('./data.json');
const app = express();

app.get("/data",(req,res)=>{
    res.send(JSON.stringify(data));
    
    
})



app.listen(9000,()=>{
    console.log("Server started You are welcome 👍");
})