const express=require('express');
const event=require("../controllers/eventController")
const router=express.Router();
 const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];
    
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
    
        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        console.log(403);
        res.sendStatus(403)
    }
    }
    function authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log(token);
        if (token == null) return res.sendStatus(401); // Unauthorized
      
        jwt.verify(token, 'hello world', (err, user) => {
          if (err) return res.sendStatus(403); // Forbidden
          req.token = token;
          next(); // Pass the control to the next middleware or route handler
        });
      }
router.post("/eventadd",event.addEvent);
router.post("/signIn",event.adminSignIn);
router.post("/manyeventadd",event.manyevent)
router.get("/allevent",event.events);
router.get("/eventdetails/:id",event.eventDetails);
router.get("/request",event.requests);
module.exports=router;