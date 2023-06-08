import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { userRegister } from '../redux/authAction'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const dispatch = useDispatch()
    const { login, isregister } = useSelector(state => state.auth)
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "ross",
        email: "ross@gmail.com",
        mobile: "1234567890",
        password: "123",
        active: "active"
    })

    const handleRegisterUser = () => {
        dispatch(userRegister(user))
    }

    useEffect(() => {
        isregister && navigate("/login")
    }, [isregister])

    return (<>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">
                            <div>
                                <label for="name" className="form-label">First name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter your name"
                                    value={user.name}
                                    onChange={e => setUser({ ...user, name: e.target.value })}
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label for="email" className="form-label">First Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    value={user.email}
                                    onChange={e => setUser({ ...user, email: e.target.value })}
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label for="password" className="form-label">Password</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Your Password"
                                    value={user.password}
                                    onChange={e => setUser({ ...user, password: e.target.value })}
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a password.</div>
                            </div>

                            <div className="mt-2">
                                <label for="mobile" className="form-label">Mobile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Your mobile"
                                    value={user.mobile}
                                    onChange={e => setUser({ ...user, mobile: e.target.value })}
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a mobile.</div>
                            </div>
                            <div className="mt-2">
                                <label for="active" className="form-label">Active</label>
                                <select class="form-select"
                                    value={user.active}
                                    onChange={e => setUser({ ...user, active: e.target.value })}
                                >
                                    <option selected>Open this select menu</option>
                                    <option value="active">active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a active.</div>
                            </div>


                            <button type="button" className="btn btn-primary w-100 mt-3" onClick={e => handleRegisterUser()}  >
                                Signup
                            </button>
                            <p className="text-center mt-3">
                                Already Have Account? <a href="#">Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
