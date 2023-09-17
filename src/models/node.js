const mongoose =require("mongoose");

const NodeSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

},{timestamps: true})

module.exports=mongoose.model("Node",NodeSchema);