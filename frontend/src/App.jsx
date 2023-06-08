import React from 'react'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import AddCategory from './pages/AddCategory';
import Protected from './pages/Protected';
import AllCategories from './pages/AllCategories';
import AddProduct from './pages/AddProduct';
import AllProducts from './pages/AllProducts';
import { useSelector } from 'react-redux';

const App = () => {

  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/addcategory" element={<Protected element={<AddCategory />} />} ></Route>
        <Route path="/allcategories" element={<Protected element={<AllCategories />} />} ></Route>
        <Route path="/add-product" element={<Protected element={<AddProduct />} />} ></Route>
        <Route path="/allproducts" element={<Protected element={<AllProducts />} />} ></Route>



      </Routes>
    </BrowserRouter>

  </>
}

export default App

