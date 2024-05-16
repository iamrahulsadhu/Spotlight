import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//components
import Dashboard from "../components/Dashboard";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Update from "../components/Update";
import Insert from "../components/Insert";
import axios from "axios";
import Login from "../components/Login";

const Auth = () => {
  
  const logInUser = async (values) => {
    const { adminName, password } = values;
    axios
      .post("http://localhost:4000/admin/login", { adminName, password })
      .then((res) => {
        console.log(res);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
      <Routes>
        <Route path="/" element={<Login logInUser={logInUser} />} />
          <Route path="/admin" element={<Layout />}>
            <Route path="" element={<Dashboard  />} />
            <Route path="/admin/table" element={ <Home /> } />
            <Route path="/admin/requests" element={ <Request  /> } />
            <Route path="/admin/insert" element={<Insert />} />
            <Route path="/admin/update" element={ <Update/> } />
          </Route>
        <Route path="*" element={<Login/>}/>
      </Routes>
  );
};
export default Auth;
