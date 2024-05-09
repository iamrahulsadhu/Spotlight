const express=require('express');
const cors=require("cors")
const app=express();
const userRoute=require("./routers/userRouter")
const eventRoute=require("./routers/eventRouter")
const mailRoute=require("./routers/mailRouter")
const adminRoute=require("./routers/adminRouter")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(userRoute);
app.use(eventRoute);
app.use(mailRoute);
app.use(adminRoute);
app.listen(4000,()=>{
    console.log("Server is running");
})