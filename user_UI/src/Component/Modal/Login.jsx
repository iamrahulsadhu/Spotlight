import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../CSS/login.css'
import axios from 'axios';
function Login({login}) {
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
        onSubmit:(values) => {
            // Handle form submission here
              login(values)
        }
    });

    return (
        <div className="containerMain">
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
        </div>
    );
}

export default Login;