const express=require('express');
const mailer=require("../controllers/mailController")
const router=express.Router();
router.post("/mail/:id",mailer.mail);
router.post("/invite/:id",mailer.invite);
router.post("/ticket",mailer.ticket);
module.exports=router;
