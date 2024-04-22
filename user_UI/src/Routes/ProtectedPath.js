import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedPath = (props) => {
    const nav=useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem('login')
        if(!token){
            nav('/login')
        }
    },[])
    const FunctionDel=()=>{
        localStorage.removeItem('login')
        nav('/login')
    }
  return (
    <div>
        <props.component/>
        <button type="button" class="btn btn-danger text-light mt-5" onClick={FunctionDel}>Logout</button>
    </div>
  )
}

export default ProtectedPath
