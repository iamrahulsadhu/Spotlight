const mongoose=require("../database/dbConnect");
const admin=mongoose.Schema({
     events:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event'
     }],
     requests:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'request'
     }],
     userName:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     }
})
module.exports=mongoose.model("admin",admin);