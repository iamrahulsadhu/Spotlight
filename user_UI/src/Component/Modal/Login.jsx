import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../CSS/login.css'
import axios from 'axios';
function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required')
        }),
        onSubmit:async(values) => {
            // Handle form submission here

            try{
                const{email,password}=values;
                await axios.post("http://localhost:4000/login",{
                  email,password
                })
            console.log('Form values:', values);
        }
        catch(err)
        {
            console.log(err.message);
        }
    }
    });

    return (
        <main>
            <header>
                <h4>Login</h4>
                <form onSubmit={formik.handleSubmit}>
                    <div className="from-wrapper">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Username or Email Address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <div className="from-wrapper">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                    <div className="rememberBox">
                        <div className="remember">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.rememberMe}
                            />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <a href="http://">Forget Password</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="newAccount">
                        Don't have an account ? <a href="http://">Sign up</a>
                    </div>
                </form>
            </header>
        </main>
    );
}

export default Login;