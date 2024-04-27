import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Component/Landing'
import Login from './Component/Modal/Login'
import Signup from './Component/Modal/Signup'
import Event from './Component/Pages/Event'
import EventDetails from './Component/Pages/EventDetails'
import Sidebar from './Component/SideBar/Sidebar'
import Create from './Component/Pages/CreateEvent'
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
          <Route path="/userdashboard" element={<Sidebar/>} >
            <Route path="/userdashboard/create" element={<Create />} />

            </Route>
          
          </Routes>
      {/* </Sidebar> */}
    </BrowserRouter>

  )
}

export default App