import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Component/Landing'
import Login from './Component/Modal/Login'
import Signup from './Component/Modal/Signup'
import Event from './Component/Pages/Event'
function App() {
  return (
    <BrowserRouter>
        
        {/* <Sidebar> */}
          <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<Event/>} />
          </Routes>
      {/* </Sidebar> */}
    </BrowserRouter>

  )
}

export default App