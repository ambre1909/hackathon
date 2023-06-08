const { getAllCategories, addCategory, destroyCategory, editCategory, deleteCategory, addProduct, getAllProducts, updateProductData, destroyProducts, deleteProductData } = require("../controllers/userController")

const router = require("express").Router()
router
    .get("/categories", getAllCategories)
    .post("/add-category", addCategory)
    .post("/edit-category", editCategory)
    .delete("/destroy", destroyCategory)
    .delete("/delete-category/:id", deleteCategory)
    .post("/add-product", addProduct)
    .get("/allproducts", getAllProducts)
    .post("/update-product/:productId", updateProductData)
    .delete("/destroy/allProduct", destroyProducts)
    .delete("/delete-product/:productId", deleteProductData)


module.exports = router 