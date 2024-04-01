import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Update from "../components/Update";
import Insert from "../components/Insert";
import axios from "axios";
import Login from "../components/Login";
// import Login from "../components/Login.";
const Auth = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({});
  const [first, setfirst] = useState(true);
  useEffect(() => {
    const getData=async()=>{
    await axios
      .get("http://localhost:5000/admin/gettrains")
      .then((res) => {
        setData(() => res);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
  }, []);
  const navigate =useNavigate();
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
      .get("http://localhost:5000/admin/gettrains")
      .then((res) => {
        setData(() => res);
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
  const logInUser=async(values)=>{
    const {adminName,password}=values;
    axios.post("http://localhost:5000/admin/login",{adminName,password}).then((res)=>{
console.log(res);
    navigate("/admin")
    })
    .catch((err)=>{
      console.log(err.message);
    })
  }
  const deleteTrain=async(id) => {
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
    <>
      <Routes>
      <Route path="/" element={<Login logInUser={logInUser} />}/>
       {first?(<Route path="/admin" element={<Layout/>}>
          {/* <Route path="" element={<Login data={data}/>} /> */}
          <Route path="" element={<Dashboard data={data}/>} />
          <Route
            path="/admin/table"
            element={
              <Home table={table} data={data} updateTrain={updateTrain} deleteTrain={deleteTrain}/>
            }
          />
          <Route path="/admin/insert" element={<Insert insertData={insertData} />} />
          <Route
            path="/admin/update"
            element={
              <Update
                updateTrainData={updateTrainData}
                updateData={updateData}
              />
            }
          />
        </Route>):null
}
      </Routes>
    </>
  );
};

export default Auth;
