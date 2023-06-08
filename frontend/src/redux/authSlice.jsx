import { createSlice } from "@reduxjs/toolkit";
import { addCategory, addProductDataAction, deleteCategoryAction, deleteProductDataAction, editCategoryAction, getAllCategory, getProductDataAction, updateProductDataAction, userLogin, userRegister } from "./authAction";

const localLogindata = localStorage.getItem("localLogin") ? JSON.parse(localStorage.getItem("localLogin")) : null

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: localLogindata,
        allProducts: [],
        isProductUpdated: false,
        isProductAdded: false
    },
    reducers: {
        logout(state) {
            localStorage.removeItem("localLogin")
            state.login = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(userRegister.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userRegister.fulfilled, (state, { payload }) => {
                state.loading = false
                state.isregister = true
            })
            .addCase(userRegister.rejected, (state, { payload }) => {
                state.loading = false
                state.authError = payload
            })


            .addCase(userLogin.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.login = payload
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false
                state.authError = payload
            })

            .addCase(addCategory.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addCategory.fulfilled, (state, { payload }) => {
                state.loading = false
                state.isCategoryAdded = !isCategoryAdded
            })
            .addCase(addCategory.rejected, (state, { payload }) => {
                state.loading = false
                state.authError = payload
            })
            .addCase(getAllCategory.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getAllCategory.fulfilled, (state, { payload }) => {
                state.loading = false
                state.allCategories = payload
            })
            .addCase(getAllCategory.rejected, (state, { payload }) => {
                state.loading = false
                state.authError = payload
            })
            .addCase(editCategoryAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(editCategoryAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.isCategoryUpdated = !isCategoryUpdated
            })
            .addCase(editCategoryAction.rejected, (state, { payload }) => {
                state.loading = false
                state.authError = payload
            })
            .addCase(deleteCategoryAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(deleteCategoryAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.isCategorydeleted = !isCategorydeleted
            })
            .addCase(deleteCategoryAction.rejected, (state, { payload }) => {
                state.loading = false
                state.authError = payload
            })
            .addCase(addProductDataAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addProductDataAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.isProductAdded = true
            })
            .addCase(addProductDataAction.rejected, (state, { payload }) => {
                state.loading = false
                state.authError = payload
            })
            .addCase(getProductDataAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getProductDataAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.allProducts = payload
            })
            .addCase(getProductDataAction.rejected, (state, { payload }) => {
                state.loading = false
                state.authError = payload
            })
            .addCase(updateProductDataAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updateProductDataAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.isProductUpdated = true
            })
            .addCase(updateProductDataAction.rejected, (state, { payload }) => {
                state.loading = false
                state.authError = payload
            })
            .addCase(deleteProductDataAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(deleteProductDataAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.Productdeleted = true
            })
            .addCase(deleteProductDataAction.rejected, (state, { payload }) => {
                state.loading = false
                state.authError = payload
            })

    }

})

export default authSlice.reducer
export const { logout } = authSlice.actions

