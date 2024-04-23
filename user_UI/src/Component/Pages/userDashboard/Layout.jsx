import React from 'react'
import Parent from './Parent'
import { Outlet } from 'react-router-dom'
const Layout = ({logout}) => {
  return (
    <>
      <Parent logout={logout}/>
      <Outlet/>
</>
  )
}

export default Layout
