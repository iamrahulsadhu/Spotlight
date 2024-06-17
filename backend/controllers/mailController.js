const nodemailer=require("nodemailer");
const qrcode=require("qrcode");
class Mailer{
static mail=async(req,res)=>{
  try {
    const id=req.params.id;
    const {mail}=req.body;
const transporter = nodemailer.createTransport({port: 465,
host: "smtp.gmail.com",
auth: {
user: 'bwubca21211@brainwareuniversity.ac.in',
pass: 'nrmc yvqz vojv ldea',},
 secure: true,
 });
const mailData = {
name:"Spotlight",
from: 'bwubca21211@brainwareuniversity.ac.in',
to:`${mail}`,
subject: 'Sending Email using Node.js',text: 'That was easy!',
html: `<Link>http://localhost:3000/events/event/${id}</Link>`,
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
}

//////invite///////////
static invite=async(req,res)=>{
      try {
        const id=req.params.id;
        const {mail}=req.body;
    const transporter = nodemailer.createTransport({port: 465,
    host: "smtp.gmail.com",
    auth: {
    user: 'bwubca21211@brainwareuniversity.ac.in',
    pass: 'nrmc yvqz vojv ldea',},
     secure: true,
     });
    const mailData = {
    name:"Spotlight",
    from: 'bwubca21211@brainwareuniversity.ac.in',
    to:`${mail}`,
    subject: 'Sending Email using Node.js',text: 'That was easy!',
    html: `<Link>http://localhost:3000/events/event/${id}</Link>`,
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
    }
static ticket=async(req,res)=>{
    try {
    const {emailName}=req.body;
    console.log(emailName);
        const url = req.query.url || 'https://example.com';
        const qrCodeImage = await qrcode.toDataURL(url);
        console.log("QR Code Image:", qrCodeImage); 
        const transporter = nodemailer.createTransport({port: 465,
            host: "smtp.gmail.com",
            auth: {
            user: 'bwubca21211@brainwareuniversity.ac.in',
            pass: 'nrmc yvqz vojv ldea',},
             secure: true,
             });
            const mailData = {
            name:"Spotlight",
            from: 'bwubca21211@brainwareuniversity.ac.in',
            to:`${emailName}`,
            subject: 'Sending Email using Node.js',text: 'That was easy!',
            html: `<img src="${qrCodeImage}"/>`,
            };
            transporter.sendMail(mailData, function (err, info) {
            if(err){
             console.log(err)
            res.status(400).send({err})
            }
            else{
            console.log(info); 
            res.status(200).send('<img src=${qrCodeImage}/>')
            }
            })
      } catch (err) {
        console.error('Error generating QR code:', err);
        res.status(500).send('Internal Server Error');
      }
}
}

module.exports=Mailer;