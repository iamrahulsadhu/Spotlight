import React from 'react'
import { useFormik } from 'formik';
const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      adminName: "",
    }
  });
  return (
    <>
      <div class="main">
    <p class="sign" align="center">Sign in</p>
    <form class="form1">
    <input className='un'
              type="text"
              required
              value={formik.values.adminName}
              onChange={formik.handleChange}
              name="adminName"
              placeholder="User Name"
            />
        <input type={props.show?"text":"password"} className='pass' value={formik.values.password}
              onChange={formik.handleChange} name="password" placeholder="Password" />
              <div className="submitDiv d-flex justify-content-center">
       <button type="button" onClick={()=>{props.logInUser(formik.values)}} className="btn btn-primary register">
              Login
            </button>
            </div>
      <p class="forgot" align="center"><a href="#">Forgot Password?</a></p>
       </form>     
                
    </div>
    </>
  )
}
export default Login