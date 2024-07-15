const mongoose=require("../database/dbConnect");
const event=mongoose.Schema({
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
   image:{
      type:String
   },
     details:{
        type:String,
        required:true
     },
     category: {
      type: String,
      enum: ["music","sports","comedy","exibition"]
    }
})
module.exports=mongoose.model("event",event);