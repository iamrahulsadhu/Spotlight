const express=require('express');
const mailer=require("../controllers/mailController")
const router=express.Router();
router.post("/mail",mailer.mail);
module.exports=router;
