const mongoose=require("../database/dbConnect");
const request=mongoose.Schema({
     eventName:{
        type:String,
        required:true
     },
     photo:{
        type:String,
     },
     timing:{
        type:String,
        required:true,
     },
     details:{
        type:String,
        required:true
     },
     category: {
      type: String,
      enum: ["music", "thriller", "sports","comedy","birthday"]
    }
})
module.exports=mongoose.model("request",request);