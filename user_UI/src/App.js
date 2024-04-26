import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Landing from './Component/Landing';
import Login from './Component/Modal/Login';
import Signup from './Component/Modal/Signup';
import Event from './Component/Pages/Event';
import EventDetails from './Component/Pages/EventDetails';
import Layout from "../src/Component/Pages/userDashboard/Layout";
import Home from "../src/Component/Pages/userDashboard/Home";
import './App.css'
import MyEvent from './Component/Pages/userDashboard/MyEvent';
import Rsvp from './Component/Pages/userDashboard/Rsvp';
import Notifications from './Component/Pages/userDashboard/Notifications';
import CreateEvent from './Component/Pages/userDashboard/CreateEvent';
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events/event/:id" element={<EventDetails />} />
          

          <Route path="/user" element={<Layout />}>
              <Route path="/user" element={<Home/>}/>
              <Route path="/user/allevents" element={<Event />} />
              <Route path="/user/myevents" element={<MyEvent />} />
              <Route path="/user/rsvp" element={<Rsvp />} />
              <Route path="/user/notifications" element={<Notifications />} />
              <Route path="/user/createevent" element={<CreateEvent />} />
          </Route>  
      </Routes>
      
        {/* <div style={{
          display: "flex"
        }}>
          <div>
          <Layout/>
          </div>
          <div>
            <Routes >
              <Route path="/dashboard" element={<Home />} />
              <Route path="/myevents" element={<MyEvent />} />
            </Routes>
          </div>
        </div> */}
      </>
  );
}

export default App;
