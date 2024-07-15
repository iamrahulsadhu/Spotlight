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
          let music=["https://img.freepik.com/free-psd/urban-music-banner-template_23-2149078120.jpg?w=1380&t=st=1720901628~exp=1720902228~hmac=1e3dc7359abc53445b81adda9d345dd5a13af832ae30933256239e12c6824d11","https://img.freepik.com/free-vector/gradient-music-festival-twitch-background_23-2149076043.jpg?w=1060&t=st=1720901753~exp=1720902353~hmac=a6f4c0b66bd86a7d95209729284a0b199c0bb811f3821cbe699d1e7d30e3d702","https://img.freepik.com/free-vector/gradient-electronic-music-facebook-cover_23-2149913287.jpg?w=1380&t=st=1720901934~exp=1720902534~hmac=34100cef62c0b61895a5b85e3b96013fa4a94b828fc2739bc0938bd23e632ae4","https://img.freepik.com/free-psd/banner-template-techno-music-night-party_23-2148815177.jpg?w=1380&t=st=1720902007~exp=1720902607~hmac=0a53690e734b6ed2eddc901a877e527bc444943a63e0b4f5fb424aef3165b22a","https://img.freepik.com/free-psd/music-channel-template-design_23-2151387439.jpg?w=996&t=st=1720902038~exp=1720902638~hmac=a9833805d2864b8d27644d8ee82e60ff7ba363532855981fb1775021353745b8","https://img.freepik.com/free-psd/music-event-banner-template_23-2148925044.jpg?w=1380&t=st=1720902062~exp=1720902662~hmac=ac3481c12f6e534b49353d2c88891afad4e3c8ae962c3b2befc65cbcde66be26"]

          let sports=["https://img.freepik.com/free-psd/basketball-banner-concept_23-2148663869.jpg?w=1380&t=st=1720963706~exp=1720964306~hmac=d6da52ae68e30bf2446f6d021bf56d33838733087dae7315ba12ab47d7d0d75a","https://img.freepik.com/free-psd/gym-fitness-web-banner-template_106176-660.jpg?w=1380&t=st=1720963618~exp=1720964218~hmac=b7d3c126318e418e085ce1899bc35c8833a3412c988dd74a7f1bdcb5bba934bf","https://img.freepik.com/free-psd/sport-event-banner-template_23-2148947929.jpg","https://marketplace.canva.com/EAEQpf33FmU/2/0/1600w/canva-yellow-and-black-photo-classic-maximalist-sports-football-event-banner-F9DE5sqa4fM.jpg"]
          let comedy=["https://img.freepik.com/free-psd/comedy-show-banner-template_23-2148707182.jpg","https://img.freepik.com/premium-psd/realistic-banner-comedy-show-with-3d-text-effect-editable-text-style_333987-1864.jpg","https://t3.ftcdn.net/jpg/02/69/25/34/360_F_269253421_jX2XXI4kRzpxRAjHKAUB3zG0ypNLu6FU.jpg"];
          let exibition=["https://img.freepik.com/free-vector/flat-art-exhibition-event-sale-banner-template_23-2149479554.jpg","https://c8.alamy.com/comp/2M3MMXK/modern-art-exhibition-banner-invitation-to-artist-exposition-abstract-contemporary-background-with-colorful-flowers-shapes-and-elements-paint-desi-2M3MMXK.jpg","https://static.vecteezy.com/system/resources/previews/013/455/488/original/art-exhibition-banner-abstract-background-flyer-free-vector.jpg"];
          const {id}=req.params;
          const {userid}=req.body;
          console.log(id,userid);
          const data=await request.findOne({_id:id});
          const {name,
            category,
            date,
            timing,
            photo,
            details}=data;
          if(category=="music"){
            const a=music.length-1;
            function getRandomInt(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min + 1)) + min;  
            } 
            let i=getRandomInt(0,a); 
            console.log("hjdcbyu");
            console.log(data);
                const eventData = await event.create({
                  name,
                  category,
                  date,
                  image: music[i], // Corrected this line
                  timing,
                  photo,
                  details
                })
                console.log(eventData);
            await request.findOneAndDelete({_id:id});
            await admin.findOneAndDelete({_id:id});
            await user.updateOne({_id:userid},
                { $push: { myevents: eventData._id } });

            res.status(200).send({data:data.requests})
            } 
            else if(category=="sports")
            {
                const a=sports.length-1;
                function getRandomInt(min, max) {
                  min = Math.ceil(min);
                  max = Math.floor(max);
                  return Math.floor(Math.random() * (max - min + 1)) + min;  
                } 
                let i=getRandomInt(0,a); 
                console.log("hjdcbyu");
                console.log(data);
                    const eventData = await event.create({
                      name,
                      category,
                      date,
                      image:sports[i], // Corrected this line
                      timing,
                      photo,
                      details
                    })
                    console.log(eventData);
                await request.findOneAndDelete({_id:id});
                await admin.findOneAndDelete({_id:id});
                await user.updateOne({_id:userid},
                    { $push: { myevents: eventData._id } });
    
                res.status(200).send({data:data.requests})
            }
            else if(category=="comedy")
              {
                  const a=comedy.length-1;
                  function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1)) + min;  
                  } 
                  let i=getRandomInt(0,a); 
                  console.log("hjdcbyu");
                  console.log(data);
                      const eventData = await event.create({
                        name,
                        category,
                        date,
                        image:comedy[i], // Corrected this line
                        timing,
                        photo,
                        details
                      })
                      console.log(eventData);
                  await request.findOneAndDelete({_id:id});
                  await admin.findOneAndDelete({_id:id});
                  await user.updateOne({_id:userid},
                      { $push: { myevents: eventData._id } });
      
                  res.status(200).send({data:data.requests})
              }
              else if(category=="exibition")
                {
                    const a=exibition.length-1;
                    function getRandomInt(min, max) {
                      min = Math.ceil(min);
                      max = Math.floor(max);
                      return Math.floor(Math.random() * (max - min + 1)) + min;  
                    } 
                    let i=getRandomInt(0,a); 
                    console.log("hjdcbyu");
                    console.log(data);
                        const eventData = await event.create({
                          name,
                          category,
                          date,
                          image:exibition[i], // Corrected this line
                          timing,
                          photo,
                          details
                        })
                        console.log(eventData);
                    await request.findOneAndDelete({_id:id});
                    await admin.findOneAndDelete({_id:id});
                    await user.updateOne({_id:userid},
                        { $push: { myevents: eventData._id } });
        
                    res.status(200).send({data:data.requests})
                }
        } catch (err) {
            console.log(err);
            res.status(400).send({err:err.message})
        }
    }
}
module.exports=AdminController;