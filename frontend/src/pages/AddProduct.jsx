import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { addProductDataAction, getAllCategory } from '../redux/authAction';

const AddProduct = () => {
    const { allCategories, isCategoryAdded, isCategoryUpdated, isCategorydeleted } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [image, setImage] = useState()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])

    const formik = useFormik({
        initialValues: {
            category: "milk",
            productName: "amul",
            packSize: "20",
            price: "50",
            status: true,
            img: "https://plus.unsplash.com/premium_photo-1686050416689-1b1f64fd5000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",

        },
        validationSchema: yup.object({
            category: yup.string().required("Enter Your category"),
            productName: yup.string().required(" Enter productName"),
            packSize: yup.string().required(" Enter packsize"),
            price: yup.string().required(" Enter mrp"),
            status: yup.string().required(" Enter status"),
            img: yup.string().required(" Enter img"),
        }),
        onSubmit: (values, e) => {

            dispatch(addProductDataAction(values))

        },
    });
    return <>
        <div class="container">
            <form onSubmit={formik.handleSubmit}>
                <div class="row mt-4">

                    <div class="col-sm-4 ">
                        <select class="form-control" id="name" placeholder="Enter Your category"
                            name="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.errors.category && formik.touched.category
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                        >
                            <option selected>Open this select menu</option>
                            {
                                allCategories && allCategories.map(item =>
                                    <option value={item.categoryName}>{item.categoryName}</option>
                                )
                            }

                        </select>

                    </div>
                    <div class="col-sm-4 ">

                        <input type="text" class="form-control " id="name" placeholder="Enter Your productName"
                            name="productName"
                            value={formik.values.productName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.errors.productName && formik.touched.productName
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                        />
                    </div>
                    <div class="col-sm-4 ">

                        <input type="text" class="form-control" id="name" placeholder="Enter  packsize"
                            name="packsize"
                            value={formik.values.packsize}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.errors.packsize && formik.touched.packsize
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                        />
                    </div>
                    <div class="col-sm-4 mt-2">
                        <input type="text" class="form-control mt-3" id="name" placeholder="Enter  mrp"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.errors.price && formik.touched.price
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                        />
                    </div>

                    <div class="col-sm-4 mt-2">
                        <input type="text" class="form-control mt-3" id="name" placeholder="Enter  img"
                            name="img"
                            value={formik.values?.img}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.errors?.img && formik.touched?.img
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                        />
                    </div>


                    <div class="col-sm-4 mt-2">
                        <select class="form-select mt-3"
                            name="status"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.errors.status && formik.touched.status
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                        >
                            <option selected>Open this select menu</option>
                            <option value={true}>active</option>
                            <option value={false}>Inactive</option>

                        </select>

                    </div>



                    <button type="submit" class="btn btn-primary mt-4 m-auto col-4">Save</button>
                </div>
            </form>

        </div >
    </>
}

export default AddProduct