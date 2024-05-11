const express=require('express');
const admin=require("../controllers/adminController")
const router=express.Router();
router.post("/admin/login",admin.adminLogin);
router.get("/allevents",admin.allrequests);
router.post("/accept/:id",admin.accept);
module.exports=router;