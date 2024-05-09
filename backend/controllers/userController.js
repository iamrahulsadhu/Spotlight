const user=require("../modelSchema/userDetails");
const admin=require("../modelSchema/adminDetails");
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
class User{

    static userSignUp=async(req,res)=>{
        try{
        const {fullName,userName,email,password}=req.body;
        console.log(fullName,userName);
        const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
        const data=await user.create({
            fullName,userName,email,password:hash
        })
        res.status(200).send({data:data});
    }
    catch(err)
    {
        console.log("error");
        console.log(err.message);
        res.status(400).send({err:err.message});
    }
    }

    static userLogIn=async(req,res)=>{
        const { email, password } = req.body;
        try {
          // if (req.session.userId) {
          //   return res.status(400).send("User is already logged in");
          // }
          const existingUser = await user.findOne({ email:email });
          if (!existingUser) {
            return res.status(500).send({ err: "Invalid username" });
          }
          const isMatching = bcrypt.compareSync(password, existingUser.password);
          if (!isMatching) {
            return res.status(400).send({ err: "Invalid username or password" });
          }
          jwt.sign({existingUser}, 'hello world', { expiresIn: '1h' },(err, token) => {
            if(err) { console.log(err) }    
            res.send({token:token,id:existingUser._id});
        });
          console.log(existingUser);
          // res.status(200).send({ user: existingUser });
        } catch (err) {
          res.status(500).send({ err: err.message });
        }
      };
}

module.exports=User;