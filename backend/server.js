const express=require('express');
const cors=require("cors")
const app=express();
const userRoute=require("./routers/userRouter")
const eventRoute=require("./routers/eventRouter")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(userRoute);
app.use(eventRoute);
app.listen(4000,()=>{
    console.log("Server is running");
})