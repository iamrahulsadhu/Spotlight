import React from 'react'
import Parent from './Parent'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Parent/>
      <Outlet/>
</>
  )
}

export default Layout
