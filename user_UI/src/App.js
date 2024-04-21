import React,{useState,useEffect}from 'react';
import { BrowserRouter, Routes, Route,useNavigate} from 'react-router-dom';
import Landing from './Component/Landing';
import Login from './Component/Modal/Login';
import Signup from './Component/Modal/Signup';
import Event from './Component/Pages/Event';
import EventDetails from './Component/Pages/EventDetails';
// import Sidebar from './Component/SideBar/Sidebar';
// import Home from './Component/Pages/Home';
// import Invites from './Component/Pages/Invites';
// import Loader from './Component/Pages/Loader';
import Auth from '../src/Component/Pages/navigation/Auth';
import Dashboard from "../src/Component/Pages/userDashboard/Dashboard";
import Layout from "../src/Component/Pages/userDashboard/Layout";
import Home from "../src/Component/Pages/userDashboard/Home";
import Update from "../src/Component/Pages/userDashboard/Update";
import Insert from "../src/Component/Pages/userDashboard/Insert";
import Request from "../src/Component/Pages/userDashboard/Request";
import axios from "axios";
import './App.css'
function App() {
  const [data, setData] = useState([]);
  // const [requestData,setRequestData] = useState([]);
  const [updateData, setUpdateData] = useState({});
  const [first, setfirst] = useState(true);
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
  const updateTrain = (id) => {
    try {
      // const updateData=data.data.filter((e)=>{
      //   return id===e._id;
      // })
      const updateData = data.data.find((e) => {
        return id === e._id;
      });
      setUpdateData(updateData);
      console.log(updateData);
      navigate("/admin/update");
    } catch (err) {
      console.log(err.emssage);
    }
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
  const logInUser = async (values) => {
    const { adminName, password } = values;
    axios
      .post("http://localhost:5000/admin/login", { adminName, password })
      .then((res) => {
        console.log(res);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const deleteTrain = async (id) => {
    // if(confirm("Are you sure you want to delete the train")){
    await axios
      .delete(`http://localhost:5000/admin/deletetrain/${id}`)
      .then((res) => {
        console.log(res);
        table();
      })
      .catch((err) => {
        console.log("hbwdcuhde");
        console.log(err.message);
      });
  };
  return (
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/events" element={<Event />} />
        <Route path="/events/event/:id" element={<EventDetails />} />
        <Route path="/admin" element={<Layout />}>
            {/* <Route path="" element={<Login data={data}/>} /> */}
            <Route path="" element={<Dashboard data={data} />} />
            <Route
              path="/admin/table"
              element={
                <Home
                  table={table}
                  data={data}
                  updateTrain={updateTrain}
                  deleteTrain={deleteTrain}
                />
              }
            />
            <Route
              path="/admin/requests"
              element={
                <Request requests={requests} requestData={requestData} />
              }
            />
            <Route
              path="/admin/insert"
              element={<Insert insertData={insertData} />}
            />
            <Route
              path="/admin/update"
              element={
                <Update
                  updateTrainData={updateTrainData}
                  updateData={updateData}
                />
              }
            />
          </Route>
        {/* Define nested routes relative to the parent route */}
          {/* <Route path="" element={<Loader/>} />
          <Route path="invites" element={<Invites />} /> */}
        {/* </Route> */}

        {/* Additional routes */}
      </Routes>
  );
}

export default App;
