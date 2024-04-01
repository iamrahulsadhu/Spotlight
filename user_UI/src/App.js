import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Landing from './Component/Landing'
import Landing from './Component/Landing'
import Login from './Component/Modal/login'

function App() {
  return (
    <BrowserRouter>
        
        {/* <Sidebar> */}
          <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/login" element={<Login />} />
          </Routes>
      {/* </Sidebar> */}
    </BrowserRouter>

  )
}

export default App