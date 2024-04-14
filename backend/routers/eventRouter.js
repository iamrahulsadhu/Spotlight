const express=require('express');
const event=require("../controllers/eventController")
const router=express.Router();
router.post("/eventadd",event.addEvent);
router.post("/manyeventadd",event.manyevent)
router.get("/allevent",event.events);
module.exports=router;