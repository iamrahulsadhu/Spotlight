import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [totalTrains, setTotalTrains] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  // useEffect(() => {

  //   const fetchTotalTrains = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/admin/counttrains");
  //       setTotalTrains(response.data.count);
  //     } catch (error) {
  //       console.error("Error fetching total trains:", error);
  //     }
  //   };

  //   const fetchTotalUsers = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/admin/countusers");
  //       setTotalUsers(response.data.count);
  //     } catch (error) {
  //       console.error("Error fetching total trains:", error);
  //     }
  //   };

  //   fetchTotalTrains();
  //   fetchTotalUsers();
  // }, []);
  return (
    <div className="col-9 pt-3 second-col">
      <header className="head">
          <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Spotlight-Admin</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>
      <div className="box-container container-fluid">
        <div className="row mt-2 dashboard-row d-flex align-items-center
justify-content-center">
          <div className="col  me-2 box-innerContainer">
            <div className="bigIcon" id="bigIcon1">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="white" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
</svg>
            </div>
            <div className="box-content">
              <span>Total Booking</span>
              <h4 className="text-center mt-2">281</h4>
            </div>
          </div>
          <div className="col me-2 box-innerContainer">
            <div className="bigIcon" id="bigIcon2">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="white" class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
</svg>
            </div>
            <div className="box-content">
              <span>Total Users</span>
              <h4 className="text-center mt-2">{totalUsers}</h4>

            </div>
          </div>
          <div className="col me-2 box-innerContainer">
            <div className="bigIcon" id="bigIcon3">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="white" class="bi bi-ticket-perforated-fill" viewBox="0 0 16 16">
  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4-1v1h1v-1zm1 3v-1H4v1zm7 0v-1h-1v1zm-1-2h1v-1h-1zm-6 3H4v1h1zm7 1v-1h-1v1zm-7 1H4v1h1zm7 1v-1h-1v1zm-8 1v1h1v-1zm7 1h1v-1h-1z"/>
</svg>
            </div>
            <div className="box-content">
              <span>Total Sales</span>
              <h4 className="text-center mt-2">281</h4>
            </div>
          </div>
          <div className="col me-2 box-innerContainer">
            <div className="bigIcon" id="bigIcon4">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="white" class="bi bi-train-front-fill" viewBox="0 0 16 16">
  <path d="M10.621.515C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22ZM6.5 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m-2 2h7A1.5 1.5 0 0 1 13 5.5v2A1.5 1.5 0 0 1 11.5 9h-7A1.5 1.5 0 0 1 3 7.5v-2A1.5 1.5 0 0 1 4.5 4m.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2M4 5.5a.5.5 0 0 1 .5-.5h3v3h-3a.5.5 0 0 1-.5-.5zM8.5 8V5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"/>
</svg>
            </div>
            <div className="box-content">
              <span>Total Events</span>
              <h4 className="text-center mt-2">{totalTrains}</h4>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
