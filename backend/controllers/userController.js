const user=require("../modelSchema/userDetails");
const bcrypt=require('bcryptjs')
class User{

    static userSignUp=async(req,res)=>{
        try{
        const {fullName,userName,email,password}=req.body;
        console.log(fullName,userName);
        const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync("1234", salt);
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
          console.log("nsiu");
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
          console.log(existingUser);
          res.status(200).send({ user: existingUser });
        } catch (err) {
          res.status(500).send({ err: err.message });
        }
      };
}

module.exports=User;