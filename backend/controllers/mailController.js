const nodemailer=require("nodemailer");
class Mailer{
static mail=async(req,res)=>{
  try {
const transporter = nodemailer.createTransport({port: 465,
host: "smtp.gmail.com",
auth: {
user: 'sumanjana278@gmail.com',
pass: 'suman278',},
 secure: true,
 });
const mailData = {
from: 'sumanjana278@gmail.com',
to: 'bwubca21211@brainwareuniversity.ac.in',
subject: 'Sending Email using Node.js',text: 'That was easy!',
html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
};
transporter.sendMail(mailData, function (err, info) {
if(err){
 console.log(err)
res.status(200).send({err})
}
else{
console.log(info); 
res.status(200).send({info})
}
});
} catch (err) {
res.status(400).send({err:err.message})
}
}}
module.exports=Mailer;