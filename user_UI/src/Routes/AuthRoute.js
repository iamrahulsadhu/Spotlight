import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '../Component/Landing'
import Login from '../Component/Modal/Login'
import Signup from '../Component/Modal/Signup'
import EventDetails from '../Component/Pages/EventDetails'
import Event from '../Component/Pages/Event'
import ProtectedPath from './ProtectedPath'
import Home from '../Component/Pages/userDashboard/Home'
import CreateEvent from '../Component/Pages/userDashboard/CreateEvent'
import Rsvp from '../Component/Pages/userDashboard/Rsvp'
import Notifications from '../Component/Pages/userDashboard/Notifications'
import Layout from '../Component/Pages/userDashboard/Layout'
import MyEvent from '../Component/Pages/userDashboard/MyEvent'
const AuthRoute = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element={<ProtectedPath component={EventDetails}/>}/>
    {/* <Route path='/' element={<ProtectedPath component={Event}/>}/> */}

   </Routes>
   <Route path="/user" element={<Layout />}>
              <Route path="/user" element={<Home/>}/>
              <Route path="/user/allevents" element={<Event />} />
              <Route path="/user/myevents" element={<MyEvent />} />
              <Route path="/user/rsvp" element={<Rsvp />} />
              <Route path="/user/notifications" element={<Notifications />} />
              <Route path="/user/createevent" element={<CreateEvent />} />
    </Route>  
   </BrowserRouter>
   </>
  )
}

export default AuthRoute