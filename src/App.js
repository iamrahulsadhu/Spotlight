import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Landing from './Component/Landing'
import Home from './Component/Dashboard/pages/Home'
import Events from './Component/Dashboard/pages/Events'
import Invites from './Component/Dashboard/pages/Invites'
import Notifications from './Component/Dashboard/pages/Notifications'
import Rsvp from './Component/Dashboard/pages/Rsvp'
import Sidebar from './Component/SideBar/Sidebar'
// import CreateButton from './Component/Dashboard/Button/CreateButton'
// import Landing from './Component/Dashboard/pages/Landing'
// import Login from './Component/Modal/login'

function App() {
  return (
    <BrowserRouter>
        
        <Sidebar>
          <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Home title="Dashboard" />} />
            <Route path="/events" element={<Events title="Your Events" />} />
            <Route path="/invites" element={<Invites title="Dashboard" />} />
            <Route path="/notifications" element={<Notifications title="Dashboard" />} />
            <Route path="/rsvp" element={<Rsvp title="Dashboard" />} />
          </Routes>
      </Sidebar>
    </BrowserRouter>

  )
}

export default App