import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";


export const userRegister = createAsyncThunk("auth/register", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/auth/register", userData)
        return data.result
    } catch (error) {
        console.warn(error);
        return rejectWithValue(error)
    }
})

export const userLogin = createAsyncThunk("auth/login", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/auth/user/login", userData, userData)
        if (data.result) {
            localStorage.setItem("localLogin", JSON.stringify(data.result))
            return data.result
        } else {
            return rejectWithValue("email or password wrong")
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})


export const addCategory = createAsyncThunk("add/category", async (categoryData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/add-category", categoryData)
        return data.result

    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getAllCategory = createAsyncThunk("get/category", async (categoryData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/user/categories")
        return data.result

    } catch (error) {
        return rejectWithValue(error)
    }
})


export const editCategoryAction = createAsyncThunk("edit/category", async (editcategory, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/edit-category", editcategory)
        return data

    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteCategoryAction = createAsyncThunk("delete/category", async (deletecategoryId, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.delete(`/user/delete-category/${deletecategoryId}`)
        return data

    } catch (error) {
        return rejectWithValue(error)
    }
})


export const addProductDataAction = createAsyncThunk("add/productData", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post(`/user/add-product`, productData)
        return data

    } catch (error) {
        return rejectWithValue(error)
    }
})


export const getProductDataAction = createAsyncThunk("get/productData", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get(`/user/allproducts`)
        return data.result

    } catch (error) {
        return rejectWithValue(error)
    }
})


export const updateProductDataAction = createAsyncThunk("update/productData", async ({ productData, productId }, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post(`/user/update-product/${productId}`, productData)
        return data.result

    } catch (error) {
        return rejectWithValue(error)
    }
})


export const deleteProductDataAction = createAsyncThunk("delete/productData", async (productId, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.delete(`/user/delete-product/${productId}`)
        return data.result

    } catch (error) {
        return rejectWithValue(error)
    }
})

