const mongoose=require("../database/dbConnect");
const request=mongoose.Schema({
   name:{
        type:String,
        required:true
     },
     photo:{
        type:String,
     },
     date:{
        type:String,
        required:true,
     }, 
     timing:{
      type:String,
      required:true,
   },
     details:{
        type:String,
        required:true
     },
     creatorId:{
      type:String,
      required:true
     },
     category: {
      type: String,
      enum: ["music","sports","comedy","exibition"]
    }
})
module.exports=mongoose.model("request",request);