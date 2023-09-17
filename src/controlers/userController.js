
const userModel= require('../models/user');
const bcrypt=require("bcrypt");
const jwt= require("jsonwebtoken");
const signin = (req,res)=>{

}

const signup = async (req,res)=>{
   //existig user
   //Hased password
   //user creation 
   //token generation

   const {username,email,password} = req.body;
   try {
    const existingUser= await userModel.findOne ({email:email});
    if(existingUser){
        return res.status(400).json({message:"User already exit"});
    }

    const hasedPassword = await bcrypt.hash(password,10);
    const result = await userModel.create({
        email:email,
        password:hasedPassword,
        username:username
    });
    

   const token = jwt.sign({email:result.email,id:result._id}, SECRET_KEY);
   res.status(201).json({user:result,token:token});


   } catch (error) {
    console.log(err);
    res.status(500).json({message:"Something went wrong"})
   }
}

module.exports={signin,signup};