import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductDataAction, getAllCategory, getProductDataAction, updateProductDataAction } from '../redux/authAction'
import { useFormik } from 'formik';
import * as yup from "yup";


const AllProducts = () => {
    const dispatch = useDispatch()
    const { allProducts, isProductAdded, allCategories, Productdeleted } = useSelector(state => state.auth)
    const [productDetails, setProductDetails] = useState()
    const [images, setImages] = useState([])
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])


    useEffect(() => {
        dispatch(getProductDataAction())
    }, [isProductAdded, Productdeleted])


    const formik = useFormik({
        initialValues: productDetails,
        enableReinitialize: true,
        validationSchema: yup.object({
            category: yup.string().required("Enter Your category"),
            productName: yup.string().required(" Enter productName"),
            packSize: yup.string().required(" Enter packsize"),
            price: yup.string().required(" Enter mrp"),
            status: yup.string().required(" Enter status"),
            img: yup.string().required(" Enter img"),
        }),
        onSubmit: (values, e) => {


            dispatch(updateProductDataAction({ productData: values, productId: productDetails._id }))


        },
    });




    return <>

        <div className="container mt-5">

            <table class="table table-light table-striped table-hover">

                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">MRP</th>
                        <th scope="col">Image</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProducts && allProducts.map(item => <tr>
                            <td>{item._id}</td>
                            <td>{item.productName}</td>
                            <td>{item.packSize}</td>
                            <td>{item.category}</td>
                            <td>{item.mrp}</td>
                            <td>
                                <img src={`${item.img}`} width={"30px"} height={"30px"} alt="" srcset="" />
                            </td>
                            <td>{item.status ? "Active" : "Inactive"}</td>

                            <td><i class="bi bi-pencil-square mx-1" data-bs-toggle="modal" data-bs-target="#productModal"
                                onClick={e => setProductDetails(item)}  ></i>
                                <i class="bi bi-trash3 mx-1" onClick={e => dispatch(deleteProductDataAction(item._id))}></i></td>
                        </tr>
                        )
                    }


                </tbody>
            </table>

            <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4>                   {JSON.stringify(formik.values)}
                            </h4>
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {
                            productDetails &&
                            <div class="modal-body">

                                <form onSubmit={formik.handleSubmit}>
                                    <select class="form-select"
                                        value={formik.values?.category}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors?.category && formik.touched?.category
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        name="category"

                                    >
                                        {
                                            allCategories && allCategories.map(item =>
                                                <option value={item.categoryName}>{item.categoryName}</option>
                                            )
                                        }
                                    </select>

                                    <input type="text" class="form-control" id="name" placeholder="Enter Your Name"
                                        name="productName"
                                        value={formik.values?.productName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors?.productName && formik.touched?.productName
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                    />

                                    <input type="text" class="form-control" id="name" placeholder="Enter  packsize"
                                        name="packsize"
                                        value={formik.values?.packsize}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors?.packsize && formik.touched?.packsize
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                    />

                                    <input type="text" class="form-control mt-3" id="name" placeholder="Enter  mrp"
                                        name="mrp"
                                        value={formik.values?.mrp}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors?.mrp && formik.touched?.mrp
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                    />
                                    <select class="form-select mt-3"
                                        name="status"
                                        value={formik.values?.status}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors?.status && formik.touched?.status
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                    >
                                        <option selected>Open this select menu</option>
                                        <option value={true}>active</option>
                                        <option value={false}>Inactive</option>

                                    </select>
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
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save changes</button>
                                    </div>
                                </form>

                            </div>
                        }
                    </div>
                </div>
            </div>


















        </div >


    </>
}

export default AllProducts