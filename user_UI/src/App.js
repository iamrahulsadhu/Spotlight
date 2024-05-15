import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Component/Landing'
import Login from './Component/Modal/Login'
import Signup from './Component/Modal/Signup'

import Event from './Component/Pages/Event'
import EventDetails from './Component/Pages/EventDetails'
import MyEvent from './Component/Pages/MyEvent'
import Rsvp from './Component/Pages/Rsvp'
import Home from './Component/Pages/Home'
import Notifications from './Component/Pages/Notifications'
import Layout from './Component/Pages/Layout'
import CreateEvent from './Component/Pages/CreateEvent'
function App() {
  return (
    <BrowserRouter>
        
        {/* <Sidebar> */}
          <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<Event/>} />
          <Route path="/EventDetails" element={<EventDetails/>} />

          <Route path="/user" element={<Layout />}>
              <Route path="/user" element={<Home/>}/>
              <Route path="/user/allevents" element={<Event />} />
              <Route path="/user/myevents" element={<MyEvent />} />
              <Route path="/user/rsvp" element={<Rsvp />} />
              <Route path="/user/notifications" element={<Notifications />} />
              <Route path="/user/createevent" element={<CreateEvent />} />
          </Route> 
          
          </Routes>
      {/* </Sidebar> */}
    </BrowserRouter>

  )

import React,{useState,useEffect}from 'react';
import axios from "axios";
import './App.css'
import  Routing  from "./Router/Routing";
function App() {
 return(
  <>
  <Routing/>
  </>
 )
}

export default App;
