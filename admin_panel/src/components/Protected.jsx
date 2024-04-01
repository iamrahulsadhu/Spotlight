import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Protected = (props) => {
  const nav=useNavigate();
  useEffect(()=>{
  const check=localStorage.getItem("token");
  !check&&nav("/")
  })
//handleCall();
  return (
    <>
        <props.name/>
    </>
  )
}

export default Protected
