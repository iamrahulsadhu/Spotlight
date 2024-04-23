import React,{useState,useEffect}from 'react';
import {Routes,Route,useNavigate,Navigate} from 'react-router-dom';
import Landing from '../Component/Landing';
import Login from "../Component/Modal/Login";
import Signup from "../Component/Modal/Signup";
import Event from "../Component/Pages/Event";
import EventDetails from "../Component/Pages/EventDetails";
import Dashboard from "../Component/Pages/userDashboard/Dashboard";
import Layout from "../Component/Pages/userDashboard/Layout";
import Home from "../Component/Pages/userDashboard/Home";
import Update from "../Component/Pages/userDashboard/Update";
import Insert from "../Component/Pages/userDashboard/Insert";
import Request from "../Component/Pages/userDashboard/Request";
import Error from '../Component/Pages/Error';
import axios from "axios";
const Routing = () => {
    const [data, setData] = useState([]);
    // const [requestData,setRequestData] = useState([]);
    const [updateData, setUpdateData] = useState({});
    const [token, setToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/admin/gettrains")
          .then((res) => {
            setData(() => res);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
    }, []);
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
        localStorage.setItem("token",jwtId.data);
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
const invite=async(id)=>{
  await axios
  .post(`http://localhost:4000/mail/${id}`)
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
    const insertData = async (e, values) => {
      e.preventDefault();
      const {
        trainName,
        trainNumber,
        source,
        destination,
        acSeats,
        nonAcSeats,
        departureTime,
        arrivalTime,
        totalSeats,
        pricePerTicket,
      } = values;
      await axios
        .post("http://localhost:5000/admin/insert", {
          trainName,
          trainNumber,
          source,
          destination,
          acSeats,
          nonAcSeats,
          departureTime,
          arrivalTime,
          totalSeats,
          pricePerTicket,
        })
        .then((res) => {
          console.log(res);
          navigate("/admin/table");
        })
        .catch((err) => {
          console.log("hbwdcuhde");
          console.log(err.message);
        });
    };
    const table = async () => {
      await axios
        .get("http://localhost:4000/admin/gettrains")
        .then((res) => {
          setData(() => res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
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
    const updateTrainData = async (id, values) => {
      const {
        trainName,
        trainNumber,
        source,
        destination,
        acSeats,
        nonAcSeats,
        departureTime,
        arrivalTime,
        totalSeats,
        pricePerTicket,
      } = values;
      await axios
        .put(`http://localhost:5000/admin/trainupdate/${id}`, {
          trainName,
          trainNumber,
          source,
          destination,
          acSeats,
          nonAcSeats,
          departureTime,
          arrivalTime,
          totalSeats,
          pricePerTicket,
        })
        .then((res) => {
          console.log(res);
          navigate("/admin/table");
        })
        .catch((err) => {
          console.log("hbwdcuhde");
          console.log(err.message);
        });
    };
    const logout=()=>{
      localStorage.removeItem("token");
      navigate("/")
    }
    const deleteTrain = async (id) => {
      // if(confirm("Are you sure you want to delete the train")){
      await axios
        .delete(`http://localhost:5000/admin/deletetrain/${id}`)
        .then((res) => {
          console.log(res);
          table();
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const isAuthenticated = () => {
      // Implement your authentication logic here
      // For example, check if the user is logged in
      return true; // return true if authenticated, false otherwise
    };
    
    // Define a private route component to protect routes
    return (
        // <Routes>
        //   <Route path="/" element={<Landing />} /> 
        //   <Route path="/login" element={<Login login={login}/>} />
        //   <Route path="/signup" element={<Signup signup={signup}/>} />
        //   <Route path="/events" element={<Event />} />
        //   <Route path="/events/event/:id" element={<EventDetails eventDetail={eventDetail} invite={invite}/>} />
        //   <Route path="/admin" element={<Layout />}>
        //       {/* <Route path="" element={<Login data={data}/>} /> */}
        //       <Route path="" element={<Dashboard data={data} />} />
        //       <Route
        //         path="/admin/table"
        //         element={
        //           <Home
        //             table={table}
        //             data={data}
        //             deleteTrain={deleteTrain}
        //           />
        //         }
        //       />
        //       <Route
        //         path="/admin/requests"
        //         element={
        //           <Request requests={requests} requestData={requestData} />
        //         }
        //       />
        //       <Route
        //         path="/admin/insert"
        //         element={<Insert insertData={insertData} />}
        //       />
        //       <Route
        //         path="/admin/update"
        //         element={
        //           <Update
        //             updateTrainData={updateTrainData}
        //             updateData={updateData}
        //           />
        //         }
        //       />
        //     </Route>
        //     </Routes>
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
        <Route path="/admin" element={localStorage.getItem("token") ? <Layout logout={logout} /> : <Navigate to="/login" />}>
          <Route path="" element={<Dashboard data={data}/>} />
          <Route path="table" element={localStorage.getItem("token") ?<Home table={table} data={data} deleteTrain={deleteTrain} /> : <Navigate to="/login" />} />
          <Route path="requests" element={localStorage.getItem("token") ?<Request requests={requests} requestData={requestData} /> : <Navigate to="/login" />} />
          <Route path="insert" element={localStorage.getItem("token") ?<Insert insertData={insertData} /> : <Navigate to="/login" />} />
          <Route path="update" element={localStorage.getItem("token") ?<Update updateTrainData={updateTrainData} updateData={updateData} /> : <Navigate to="/login" />} />
        </Route>
      </Routes>
            )}
          {/* Define nested routes relative to the parent route */}
            {/* <Route path="" element={<Loader/>} />
            <Route path="invites" element={<Invites />} /> */}
          {/* </Route> */}
  
          {/* Additional routes */}
export default Routing
