import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../CSS/signup.css'; // Import your CSS file
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const Signup = ({signup}) => {
  const navigate=useNavigate();
  return (
    <div className="wrapper signup">
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
        onSubmit={async(values,{setSubmitting}) => {
               signup(values,setSubmitting)
        }}>
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
          <button type="submit" className="light" style={{width:'100%'}}>Sign Up</button>
          <p>Already have an account? <a href="#">Login</a></p>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
