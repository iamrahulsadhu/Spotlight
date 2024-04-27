import React from 'react'
import Parent from './Parent'
import { Outlet } from 'react-router-dom'
import "../../CSS/common.css"
const Layout = () => {
  return (
    <>
      <Parent/>
      <div className="left-width">
        <Outlet/>
      </div>
    </>
  )
}

export default Layout