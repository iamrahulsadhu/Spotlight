const mongoose=require("../database/dbConnect");
const user=mongoose.Schema({
     fullName:{
        type:String,
        required:true
     },
     userName:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     password:{
        type:String,
        required:true
     }
})
module.exports=mongoose.model("userData",user);