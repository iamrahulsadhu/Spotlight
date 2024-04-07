import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../CSS/signup.css' // Import your CSS file
import axios from 'axios';
const Signup = () => {
  return (
    <div className="wrapper">
      <Formik
        initialValues={{
          fullName: '',
          userName: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required('Full Name is required'),
          userName: Yup.string().required('Username is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={async(values, { setSubmitting }) => {
          try{
            const{fullName,userName,email,password}=values;
            await axios.post("http://localhost:4000/signup",{
              fullName,userName,email,password
            })
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }
        catch(err)
        {
          console.log(err.message);
        }
        }}
      >
        <Form>
          <h1>Sign up</h1>
          <div className="input">
            <Field type="text" name="fullName" placeholder="Full Name" />
            <ErrorMessage name="fullName" component="div" className="error" />
          </div>
          <div className="input">
            <Field type="text" name="userName" placeholder="Username" />
            <ErrorMessage name="userName" component="div" className="error" />
          </div>
          <div className="input">
            <Field type="text" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="input">
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit" className="light">Sign Up</button>
          <p>Already have an account? <a href="#">Login</a></p>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;