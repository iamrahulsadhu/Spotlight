const express=require('express');
const user=require("../controllers/userController")
const router=express.Router();
router.post("/signup",user.userSignUp)
router.post("/login",user.userLogIn)
module.exports=router;