const express=require('express');
const mailer=require("../controllers/mailController")
const router=express.Router();
router.post("/mail/:id",mailer.mail);
router.get("/ticket",mailer.ticket);
module.exports=router;
