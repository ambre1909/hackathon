import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategoryAction, editCategoryAction, getAllCategory } from '../redux/authAction'

const AllCategories = () => {
    const dispatch = useDispatch()
    const { allCategories, isCategoryAdded, isCategoryUpdated, isCategorydeleted } = useSelector(state => state.auth)
    const [editCategory, setEditCategory] = useState()
    const [deleteCategoryId, setDeleteCategoryId] = useState()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [isCategoryAdded, isCategoryUpdated, isCategorydeleted])



    return <>
        {/* <h4>{JSON.stringify(editCategory)}</h4> */}
        <div className="container mt-5">
            <table class="table table-light table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allCategories && allCategories.map(item => <tr>
                            <td>{item._id}</td>
                            <td>{item.categoryName}</td>
                            <td>{item.desc}</td>
                            <td>{item.status ? "Active" : "Inactive"}</td>
                            <td><i class="bi bi-pencil-square mx-1"
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                onClick={e => setEditCategory(item)}></i>
                                <i class="bi bi-trash3 mx-1"
                                    data-bs-toggle="modal" data-bs-target="#deleteModal"
                                    onClick={e => setDeleteCategoryId(item._id)}></i></td>
                        </tr>
                        )
                    }

                </tbody>
            </table>




            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">no</button>
                            <button type="button" class="btn btn-primary" onClick={e => dispatch(deleteCategoryAction(deleteCategoryId))}>yes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* editCategory */}

            {
                editCategory &&
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <input type="text" class="form-control mt-2" placeholder="Category Name"
                                    value={editCategory.categoryName}
                                    onChange={e => setEditCategory({ ...editCategory, categoryName: e.target.value })}
                                />
                                <input type="text" class="form-control mt-2" placeholder="Category Name"
                                    value={editCategory.desc}
                                    onChange={e => setEditCategory({ ...editCategory, desc: e.target.value })}
                                />

                                <select class="form-select mt-2"
                                    value={editCategory.status}
                                    onChange={e => setEditCategory({ ...editCategory, status: e.target.value })}
                                >
                                    <option value={true}>Active</option>
                                    <option value={false}>Inactive</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={e => dispatch(editCategoryAction(editCategory))}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            }












        </div>

    </>
}

export default AllCategories