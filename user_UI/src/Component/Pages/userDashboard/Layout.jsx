import React from 'react'
import "../../../CSS/common.css"
import Parent from './Parent'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <div style={{display: "flex",}}>
      <div>
        <Parent/>
      </div>
      
      <div className="left-width">
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default Layout