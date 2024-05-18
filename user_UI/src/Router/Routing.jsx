import React,{useState,useEffect}from 'react';
import {Routes,Route,useNavigate,Navigate} from 'react-router-dom';
import Landing from '../Component/Landing';
import Login from "../Component/Modal/Login";
import Signup from "../Component/Modal/Signup";
import Event from "../Component/Pages/Event";
import EventDetails from "../Component/Pages/EventDetails";
import Layout from "../Component/Pages/userDashboard/Layout";
import Home from "../Component/Pages/userDashboard/Home";
import axios from "axios";
import CreateEvent from '../Component/Pages/userDashboard/CreateEvent';
import MyEvent from '../Component/Pages/userDashboard/MyEvent';
import Dashboard from '../Component/Pages/userDashboard/Dashboard';
import Notifications from '@mui/icons-material/Notifications';
import Rsvp from '../Component/Pages/userDashboard/Rsvp';
const Routing = () => {
    const [data, setData] = useState([]);
    // const [requestData,setRequestData] = useState([]);
    const [updateData, setUpdateData] = useState({});
    const [token, setToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate();
    const signup=async(values,setSubmitting)=>{
      try{
        const{fullName,userName,email,password}=values;
        await axios.post("http://localhost:4000/signup",{
          fullName,userName,email,password
        })
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
      navigate("/login");
    }
    catch(err)
    {
      console.log(err.message);
    }
    }

    //Login User
    const login=async(values)=>{
      try{        
        const{email,password}=values;
        let jwtId=await axios.post("http://localhost:4000/login",{
          email,password
        })
        localStorage.setItem("token",jwtId.data.token);
        localStorage.setItem("id",jwtId.data.id);
        setToken(jwtId.data.data);
        setIsLoggedIn(true);
        console.log(isLoggedIn);
        navigate("/events");
    console.log(jwtId);
}
catch(err)
{
    console.log(err.message);
}
}
const eventDetail=async(id)=>{
  await axios
  .get(`http://localhost:4000/eventdetails/${id}`)
  .then((res) => {
    console.log(res.data.data);
    requestData = res.data.data;
    console.log(requestData);
  })
  .catch((err) => {
    console.log(err.message);
  });
}
const invite=async(id,mail)=>{
  await axios
  .post(`http://localhost:4000/mail/${id}`,{mail})
  .then((res) => {
    alert("Done")
  })
  .catch((err) => {
    console.log(err.message);
  });
}
const ticket=async()=>{
  console.log("kjdcui");
  await axios
  .get(`http://localhost:4000/ticket`)
  .then((res) => {
    console.log(res.data.data);
    requestData = res.data.data;
    console.log(requestData);
  })
  .catch((err) => {
    console.log(err.message);
  });
}
const createEvent=async(formData,id)=>{
  const { 
  name,
  category,
  date,
  timing,
  photo,
  details}=formData;
  await axios
  .post("http://localhost:4000/eventadd",{ name,
  category,
  date,
  timing,
  // photo,
  details,id})
  .then((res) => {
    console.log(res.data.data);
    requestData = res.data.data;
    console.log(requestData);
  })
  .catch((err) => {
    console.log(err.message);
  });
}
    let requestData;
    const requests = async () => {
      await axios
        .get("http://localhost:4000/request")
        .then((res) => {
          console.log(res.data.data);
          requestData = res.data.data;
          console.log(requestData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const logout=()=>{
      localStorage.removeItem("token");
      navigate("/")
    }
    const isAuthenticated = () => {
      // Implement your authentication logic here
      // For example, check if the user is logged in
      return true; // return true if authenticated, false otherwise
    };
    
    // Define a private route component to protect routes
    return (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/signup" element={<Signup signup={signup} />} />
          <Route path="/events" element={localStorage.getItem("token") ?<Event />: <Navigate to="/login" />}/>
          {/* Protected route for EventDetails */}
          <Route
            path="/events/event/:id"
            element={localStorage.getItem("token") ? <EventDetails eventDetail={eventDetail} invite={invite} ticket={ticket}/> : <Navigate to="/login" />}
          />
          {/* Protected route for admin dashboard */}
          <Route path=":id"  element={localStorage.getItem("token") ? <Layout logout={logout} /> : <Navigate to="/login" />}>
            <Route path="" element={<Dashboard data={data}/>} />
            <Route path="home" element={localStorage.getItem("token") ?<Home /> : <Navigate to="/login" />} />
            {/* <Route path="requests" element={localStorage.getItem("token") ?<Request requests={requests} requestData={requestData} /> : <Navigate to="/login" />} /> */}
            <Route path="create" element={localStorage.getItem("token") ?<CreateEvent createEvent={createEvent} /> : <Navigate to="/login" />} />
            <Route path="myevents" element={localStorage.getItem("token") ?<MyEvent/> : <Navigate to="/login" />} />
            <Route path="rsvp" element={localStorage.getItem("token") ?<Rsvp/> : <Navigate to="/login" />} />
          </Route>
        </Routes>
            )}
          {/* Define nested routes relative to the parent route */}
            {/* <Route path="" element={<Loader/>} />
            <Route path="invites" element={<Invites />} /> */}
          {/* </Route> */}
  
          {/* Additional routes */}
export default Routing
