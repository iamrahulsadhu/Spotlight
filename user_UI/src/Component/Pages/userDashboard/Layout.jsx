import React from 'react'
import Parent from './Parent'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <div style={{display: "flex",flexDirection:'column'}}>
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