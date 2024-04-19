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
        const {eventName,timing,details}=req.body;
        try {
            const data=await request.create({eventName,timing,details});
            // admin.requests.push(data._id);
            await admin.updateOne({userName:"Admin"},
              { $push: { requests: data._id } })
          //  await admin.save();
            res.status(200).send({data})
        } catch (err) {
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
                  "eventName": "Concert in the Park",
                  "timing": "2024-04-20T18:00:00Z",
                  "details": "Live music performance by local bands.",
                  "category": "music"
                },
                {
                  "eventName": "John's Birthday Bash",
                  "timing": "2024-05-10T20:00:00Z",
                  "details": "Celebrating John's 30th birthday with friends and family.",
                  "category": "birthday"
                },
                {
                  "eventName": "Football Match: Team A vs Team B",
                  "timing": "2024-04-25T15:30:00Z",
                  "details": "Intense showdown between two top teams.",
                  "category": "sports"
                },
                {
                  "eventName": "Jazz Night at the Club",
                  "timing": "2024-04-18T21:00:00Z",
                  "details": "Smooth jazz tunes all night long.",
                  "category": "music"
                },
                {
                  "eventName": "Sarah's Sweet 16 Party",
                  "timing": "2024-06-05T16:00:00Z",
                  "details": "A glamorous celebration for Sarah's milestone birthday.",
                  "category": "birthday"
                },
                {
                  "eventName": "Basketball Playoff Finals",
                  "timing": "2024-05-15T19:00:00Z",
                  "details": "The culmination of the season, who will emerge victorious?",
                  "category": "sports"
                },
                {
                  "eventName": "Rock Music Festival",
                  "timing": "2024-07-20T12:00:00Z",
                  "details": "An electrifying lineup of rock bands from around the world.",
                  "category": "music"
                },
                {
                  "eventName": "Grandma's 80th Birthday Celebration",
                  "timing": "2024-04-30T14:00:00Z",
                  "details": "A heartwarming gathering to honor Grandma's milestone birthday.",
                  "category": "birthday"
                },
                {
                  "eventName": "Tennis Exhibition Match",
                  "timing": "2024-05-05T11:00:00Z",
                  "details": "Top players showcasing their skills in an exciting exhibition match.",
                  "category": "sports"
                },
                {
                  "eventName": "Electronic Dance Music Party",
                  "timing": "2024-06-15T22:00:00Z",
                  "details": "An immersive experience with pulsating beats and dazzling visuals.",
                  "category": "music"
                },
                {
                  "eventName": "Mike's Surprise Birthday Party",
                  "timing": "2024-05-18T19:00:00Z",
                  "details": "Keeping it a secret for a memorable surprise!",
                  "category": "birthday"
                },
                {
                  "eventName": "Soccer Friendly Match: City FC vs Town United",
                  "timing": "2024-05-08T16:30:00Z",
                  "details": "A friendly match promoting sportsmanship and camaraderie.",
                  "category": "sports"
                },
                {
                  "eventName": "Classical Music Recital",
                  "timing": "2024-06-25T17:00:00Z",
                  "details": "Talented musicians performing timeless classics.",
                  "category": "music"
                },
                {
                  "eventName": "Family Picnic for Dad's Birthday",
                  "timing": "2024-05-12T12:00:00Z",
                  "details": "Enjoying outdoor fun and delicious food in honor of Dad.",
                  "category": "birthday"
                },
                {
                  "eventName": "Golf Charity Tournament",
                  "timing": "2024-06-08T08:00:00Z",
                  "details": "Raising funds for a noble cause while enjoying a round of golf.",
                  "category": "sports"
                },
                {
                  "eventName": "Folk Music Night at the Cafe",
                  "timing": "2024-05-30T19:30:00Z",
                  "details": "Soothing melodies and heartwarming tunes to unwind.",
                  "category": "music"
                },
                {
                  "eventName": "Sweet 18th Birthday Party for Lisa",
                  "timing": "2024-07-05T17:00:00Z",
                  "details": "Marking Lisa's transition into adulthood with style and grace.",
                  "category": "birthday"
                },
                {
                  "eventName": "Baseball League Championship",
                  "timing": "2024-06-20T20:00:00Z",
                  "details": "The climax of the season, who will claim the title?",
                  "category": "sports"
                },
                {
                  "eventName": "Pop Music Concert",
                  "timing": "2024-07-10T21:00:00Z",
                  "details": "Chart-topping hits and energetic performances to get the crowd moving.",
                  "category": "music"
                },
                {
                  "eventName": "Surfing Competition",
                  "timing": "2024-08-15T07:00:00Z",
                  "details": "Riders battling the waves for glory in this thrilling competition.",
                  "category": "sports"
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