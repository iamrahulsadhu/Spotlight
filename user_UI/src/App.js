import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Component/Landing'
import Login from './Component/Modal/Login'
import Signup from './Component/Modal/Signup'
import Event from './Component/Pages/Event'
import EventDetails from './Component/Pages/EventDetails'

function App() {
  return (
    <BrowserRouter>
        
        {/* <Sidebar> */}
          <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/events" element={<Event/>} />
<<<<<<< HEAD
          <Route path="/events/event/:id" element={<EventDetails/>} />
          {/* <Route path="/EventDetails" element={<EventDetails/>} /> */}
=======
          
          
          <Route path="/EventDetails" element={<EventDetails/>} />
          
>>>>>>> 61d62144fccebeb5719f61acd41e82a5b5d903ce
          </Routes>
      {/* </Sidebar> */}
    </BrowserRouter>

  )
}
export default App