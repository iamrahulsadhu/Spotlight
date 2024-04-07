const mongoose=require("mongoose");
(async()=>{
try{
    await mongoose.connect("mongodb://127.0.0.1:27017/spotlightUser")
    console.log("Database connection is done");
}
catch(err)
{
    console.log(err.message);
}
})();

module.exports=mongoose;