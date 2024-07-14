const event=require("../modelSchema/eventDetails");
const request=require("../modelSchema/request");
const admin=require("../modelSchema/adminDetails");
const jwt=require('jsonwebtoken');
const bcrypt=require("bcryptjs");
class Event{
static adminSignIn=async(req,res)=>{
  try{
  // const {fullName,userName,email,password}=req.body;
  // console.log(fullName,userName);
  const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("1234", salt);
  const data=await admin.create({
      userName:"Admin",password:hash
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
static addEvent=async(req,res)=>{
        const {name,
          category,
          date,
          timing,
          details,id}=req.body;
        try {
          console.log(category);
            const data=await request.create({name,
              category,
              date,
              date,
              timing,
              details,
              creatorId:id});
          console.log(category);
            // admin.requests.push(data._id);
            await admin.updateOne({userName:"Admin"},
              { $push: { requests: data._id } })
          //  await admin.save();
          console.log(data);
            res.status(200).send({data})
          }
         catch (err) {
            res.status(400).send({err:err.message})
        }
    }
static events=async(req,res)=>{
        try {
            const data=await event.find({});
            res.status(200).send({data})
        } catch (err) {
            res.status(400).send({err:err.message})
        }
    }
    static eventDetails=async(req,res)=>{
      try {
        const id=req.params.id;
          const data=await event.findOne({_id:id});
          res.status(200).send({data})
      } catch (err) {
          res.status(400).send({err:err.message})
      }
  }
    static requests=async(req,res)=>{
      try {
          const data=await request.find({});
          res.status(200).send({data})
      } catch (err) {
          res.status(400).send({err:err.message})
      }
  }
static manyevent=async(req,res)=>{ 
        try {
            const data=await event.create([
                {
                  "name": "Concert in the Park",
                  "date": "2024-04-20TZ",
                  "details": "Live music performance by local bands.",
                  "timing":"2:00 Pm",
                  "category": "music",
                  "image":"https://img.freepik.com/free-psd/urban-music-banner-template_23-2149078120.jpg?w=1380&t=st=1720901628~exp=1720902228~hmac=1e3dc7359abc53445b81adda9d345dd5a13af832ae30933256239e12c6824d11"
                },
                {
                  "name": "Football Match: Team A vs Team B",
                  "date": "2024-04-25T",      "timing":"4:00 PM",
                  "details": "Intense showdown between two top teams.",
                  "category": "sports",
                 "image":"https://img.freepik.com/free-psd/gym-fitness-web-banner-template_106176-660.jpg?w=1380&t=st=1720963618~exp=1720964218~hmac=b7d3c126318e418e085ce1899bc35c8833a3412c988dd74a7f1bdcb5bba934bf"
                },
                {
                  "name": "Jazz Night at the Club",
                  "date": "2024-04-18T",      "timing":"4:00 PM",
                  "details": "Smooth jazz tunes all night long.",
                  "category": "music",
                        "image":"https://img.freepik.com/free-vector/gradient-electronic-music-facebook-cover_23-2149913287.jpg?w=1380&t=st=1720901934~exp=1720902534~hmac=34100cef62c0b61895a5b85e3b96013fa4a94b828fc2739bc0938bd23e632ae4"
                },
                {
                  "name": "Basketball Playoff Finals",
                  "date": "2024-05-15T",      "timing":"4:00 PM",
                  "details": "The culmination of the season, who will emerge victorious?",
                  "category": "sports",
                  "image":"https://img.freepik.com/free-psd/basketball-banner-concept_23-2148663869.jpg?w=1380&t=st=1720963706~exp=1720964306~hmac=d6da52ae68e30bf2446f6d021bf56d33838733087dae7315ba12ab47d7d0d75a"
                },
                {
                  "name": "Rock Music Festival",
                  "date": "2024-07-20T",      "timing":"4:00 PM",
                  "details": "An electrifying lineup of rock bands from around the world.",
                  "category": "music",
                        "image":"https://img.freepik.com/free-vector/gradient-electronic-music-facebook-cover_23-2149913287.jpg?w=1380&t=st=1720901934~exp=1720902534~hmac=34100cef62c0b61895a5b85e3b96013fa4a94b828fc2739bc0938bd23e632ae4"
                },
                {
                  "name": "Tennis Exhibition Match",
                  "date": "2024-05-05T",      "timing":"4:00 PM",
                  "details": "Top players showcasing their skills in an exciting exhibition match.",
                  "category": "sports",
                  "image":"https://marketplace.canva.com/EAEQpf33FmU/2/0/1600w/canva-yellow-and-black-photo-classic-maximalist-sports-football-event-banner-F9DE5sqa4fM.jpg"
                },
                {
                  "name": "Electronic Dance Music Party",
                  "date": "2024-06-15T",      "timing":"4:00 PM",
                  "details": "An immersive experience with pulsating beats and dazzling visuals.",
                  "category": "music",
                        "image":"https://img.freepik.com/free-vector/gradient-electronic-music-facebook-cover_23-2149913287.jpg?w=1380&t=st=1720901934~exp=1720902534~hmac=34100cef62c0b61895a5b85e3b96013fa4a94b828fc2739bc0938bd23e632ae4"
                },
                {
                  "name": "Soccer Friendly Match: City FC vs Town United",
                  "date": "2024-05-08T",      "timing":"4:00 PM",
                  "details": "A friendly match promoting sportsmanship and camaraderie.",
                  "category": "sports",
                  "image":"https://img.freepik.com/free-psd/sport-event-banner-template_23-2148947929.jpg"
                },
                {
                  "name": "Classical Music Recital",
                  "date": "2024-06-25T",      "timing":"4:00 PM",
                  "details": "Talented musicians performing timeless classics.",
                  "category": "music",
                  "image":"https://img.freepik.com/free-psd/banner-template-techno-music-night-party_23-2148815177.jpg?w=1380&t=st=1720902007~exp=1720902607~hmac=0a53690e734b6ed2eddc901a877e527bc444943a63e0b4f5fb424aef3165b22a"
                },
                {
                  "name": "Golf Charity Tournament",
                  "date": "2024-06-08T",      "timing":"4:00 PM",
                  "details": "Raising funds for a noble cause while enjoying a round of golf.",
                  "category": "sports",
                           "image":"https://img.freepik.com/free-psd/basketball-banner-concept_23-2148663869.jpg?w=1380&t=st=1720963706~exp=1720964306~hmac=d6da52ae68e30bf2446f6d021bf56d33838733087dae7315ba12ab47d7d0d75a"
                },
                {
                  "name": "Folk Music Night at the Cafe",
                  "date": "2024-05-30T",
                  "details": "Soothing melodies and heartwarming tunes to unwind.",
                  "category": "music",      "timing":"4:00 PM",
                  "image":"https://img.freepik.com/free-psd/music-channel-template-design_23-2151387439.jpg?w=996&t=st=1720902038~exp=1720902638~hmac=a9833805d2864b8d27644d8ee82e60ff7ba363532855981fb1775021353745b8"
                },
                {
                  "name": "Baseball League Championship",
                  "date": "2024-06-20T",
                  "timing":"4:00 PM",      "timing":"4:00 PM",
                  "details": "The climax of the season, who will claim the title?",
                  "category": "sports",
                 "image":"https://img.freepik.com/free-psd/gym-fitness-web-banner-template_106176-660.jpg?w=1380&t=st=1720963618~exp=1720964218~hmac=b7d3c126318e418e085ce1899bc35c8833a3412c988dd74a7f1bdcb5bba934bf"
                },
                {
                  "name": "Pop Music Concert",
                  "date": "2024-07-10T",
                  "timing":"4:00 PM",
                  "details": "Chart-topping hits and energetic performances to get the crowd moving.",
                  "category": "music",
                  "image":"https://img.freepik.com/free-psd/music-event-banner-template_23-2148925044.jpg?w=1380&t=st=1720902062~exp=1720902662~hmac=ac3481c12f6e534b49353d2c88891afad4e3c8ae962c3b2befc65cbcde66be26"
                },
                {
                  "name": "Surfing Competition",
                  "date": "2024-08-15T",
                  "timing":"4:00 PM",
                  "details": "Riders battling the waves for glory in this thrilling competition.",
                  "category": "sports",
                           "image":"https://img.freepik.com/free-psd/basketball-banner-concept_23-2148663869.jpg?w=1380&t=st=1720963706~exp=1720964306~hmac=d6da52ae68e30bf2446f6d021bf56d33838733087dae7315ba12ab47d7d0d75a"
                }
              ]
              );
            res.status(200).send({data})
        } catch (err) {
            res.status(400).send({err:err.message})
        }
    }
}
module.exports=Event;