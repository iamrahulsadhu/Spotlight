const event=require("../modelSchema/eventDetails");
const request=require("../modelSchema/request");
const admin=require("../modelSchema/adminDetails");
const user=require("../modelSchema/userDetails");
const bcrypt=require('bcryptjs');
class AdminController{
    static adminLogin=async(req,res)=>{
        const { adminName, password } = req.body;
        try {
          // if (req.session.userId) {
          //   return res.status(400).send("User is already logged in");
          // }
          console.log(adminName);
          const existingUser = await admin.findOne({ userName:adminName });
          console.log(adminName);
          if (!existingUser) {
            return res.status(400).send({ err: "Invalid username" });
          }
          const isMatching = bcrypt.compareSync(password, existingUser.password);
          if (!isMatching) {
            return res.status(400).send({ err: "Invalid username or password" });
          }
        //   jwt.sign({existingUser}, 'hello world', { expiresIn: '1h' },(err, token) => {
        //     if(err) { console.log(err) }    
        //     res.send({token:token,id:existingUser._id});
        // });
          console.log(existingUser);
          res.status(200).send({ user: existingUser });
        } catch (err) {
          res.status(500).send({ err: err.message });
        }
      };
    static allrequests=async(req,res)=>{
        try {
            const data=await admin.findOne().populate("requests");
            res.status(200).send({data:data.requests})
        } catch (err) {
            res.status(400).send({err:err.message})
        }
    }
    static accept=async(req,res)=>{
        try {
            console.log("hjdcbyu");
            const {id}=req.params;
            const {userid}=req.body;
            console.log(id,userid);
            const data=await request.findOne({_id:id});
            console.log(data);
            const {name,
                category,
                date,
                timing,
                photo,
                details}=data;
            const eventData=await event.create({name,
                category,
                date,
                timing,
                photo,
                details});
                console.log(eventData);
            await request.findOneAndDelete({_id:id});
            await user.updateOne({_id:userid},
                { $push: { myevents: eventData._id } });

            res.status(200).send({data:data.requests})
        } catch (err) {
            console.log(err);
            res.status(400).send({err:err.message})
        }
    }
}
module.exports=AdminController;