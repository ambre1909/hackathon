import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addCategory } from '../redux/authAction'

const AddCategory = () => {
    const [categoryData, setCategoryData] = useState({
        categoryName: "fruits",
        desc: "lorem ipsum",
        status: true
    })
    const dispatch = useDispatch()

    const handleCategoryData = () => {
        dispatch(addCategory(categoryData))
    }
    return <>
        <div class="container">
            <div class="row mt-4">

                <div class="col-sm-4 ">

                    <input type="text" class="form-control" placeholder="Category Name" aria-label="Username"
                        value={categoryData.categoryName}
                        onChange={e => setCategoryData({ ...categoryData, categoryName: e.target.value })}
                    />
                </div>

                <div class="col-sm-4 ">

                    <input type="text" class="form-control" placeholder="Description" aria-label="Server"
                        value={categoryData.desc}
                        onChange={e => setCategoryData({ ...categoryData, desc: e.target.value })}
                    />
                </div>
                <div class="col-sm-4 ">
                    <select class="form-select"
                        value={categoryData.status}
                        onChange={e => setCategoryData({ ...categoryData, status: e.target.value })}
                    >
                        <option value={true}>Active</option>
                        <option value={false}>Inactive</option>
                    </select>
                </div>
                <button type="button" onClick={e => handleCategoryData()} class="btn btn-primary col-4 m-auto mt-4">Save</button>
            </div>
        </div >
    </>
}

export default AddCategory