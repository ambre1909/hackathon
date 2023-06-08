import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';

const Navbar = () => {
    const navigate = useNavigate()
    const { login, isregister } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" to="/">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {
                            login ? <>
                                <Link class="nav-link active" to="/addcategory">AddCategory</Link>
                                <Link class="nav-link active" to="/allcategories">allcategories</Link>
                                <Link class="nav-link active" to="/add-product">add-product</Link>
                                <Link class="nav-link active" to="allproducts">products</Link>
                                <Link class="nav-link active" to="/login"
                                    onClick={e => dispatch(logout())} >Logout</Link>
                            </>


                                : <>
                                    <Link class="nav-link active" to="/register">Register</Link>

                                </>


                        }


                    </div>
                </div>
            </div>
        </nav >
    </>
}

export default Navbar
