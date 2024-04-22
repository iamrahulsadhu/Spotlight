import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '../Component/Landing'
import Login from '../Component/Modal/Login'
import Signup from '../Component/Modal/Signup'
import EventDetails from '../Component/Pages/EventDetails'
import Event from '../Component/Pages/Event'
import ProtectedPath from './ProtectedPath'
const AuthRoute = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element={<ProtectedPath component={EventDetails}/>}/>

    <Route path='/' element={<ProtectedPath component={Event}/>}/>

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default AuthRoute