import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/authAction';

const Login = () => {
    const navigate = useNavigate()
    const { login, isregister } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "ross@gmail.com",
            password: "123",
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .email("Some Thing Is Missing")
                .required("Please Enter Your Email "),

            password: yup.string().required("Please Enter Your Password "),
        }),
        onSubmit: (values) => {
            dispatch(userLogin(values))
        },
    });

    return <>
        <form onSubmit={formik.handleSubmit}>
            <h4>{JSON.stringify(formik.errors)}</h4>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header">Login</div>
                            <div class="card-body">
                                <div>
                                    <label for="email" class="form-label">First Email</label>
                                    <input
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors.email && formik.touched.email
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        type="email"
                                        placeholder="Enter email" />

                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        name='password'
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={formik.errors.password && formik.touched.password
                                            ? "form-control is-invalid"
                                            : "form-control"
                                        }
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Login
                                </button>
                                <p class="text-center mt-3">
                                    Dont Have Account? <a href="#">Create Account</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>



    </>
}

export default Login