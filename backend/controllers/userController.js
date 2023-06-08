const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Category = require("../models/Category")
const asyncHandler = require("express-async-handler")
const { productUpload } = require("../utils/upload")
const Product = require("../models/Product")
const fs = require("fs").promises
const path = require("path")
const URL = require("../utils/config")


exports.addCategory = asyncHandler(async (req, res) => {
    const { categoryName, desc, status } = req.body
    if (!categoryName || !desc || !status) {
        return res.status(400).json({
            message: "all fields required"
        })
    }

    const result = await Category.create({ categoryName, desc, status })
    res.json({
        message: "category added successfully"
    })
})


exports.getAllCategories = async (req, res) => {
    try {
        const result = await Category.find()
        res.json({
            message: "Category fetched Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,

        })
    }
}

exports.destroyCategory = async (req, res) => {
    try {
        await Category.deleteMany()
        res.json({
            message: "all users deleted Successfully",
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,

        })
    }
}

exports.destroyProducts = async (req, res) => {
    try {
        await Product.deleteMany()
        res.json({
            message: "all Products deleted Successfully",
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,

        })
    }
}



exports.editCategory = async (req, res) => {
    try {
        const result = await Category.findByIdAndUpdate(req.body._id, req.body)
        res.json({
            message: "category updated Successfully",
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,

        })
    }
}


exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Category.findByIdAndDelete(id)
        res.json({
            message: "Category deleted Successfully",
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,

        })
    }
}



exports.getAllProducts = async (req, res) => {
    try {
        const result = await Product.find()
        res.json({
            message: "Product fetched Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,

        })
    }
}


exports.addProduct = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { category,
        productName,
        packSize,
        price,
        status, img } = req.body
    if (!category || !productName || !packSize || !price || !status || !img) {
        return res.status(400).json({
            message: "all fields required"
        })
    }
    const result = await Product.create(req.body)
    res.json({
        message: "product added successfully"
    })

})

exports.updateProductData = asyncHandler(async (req, res) => {
    const { productId } = req.params
    const singleProduct = await Product.findById(productId)
    if (!singleProduct) {
        return res.status(400).json({
            message: "Invalid Product Id"
        })
    }

    const result = await Product.findByIdAndUpdate(productId,
        req.body
        , { new: true })

    res.json({
        message: "product updated successfully",
        result
    })

})

exports.deleteProductData = asyncHandler(async (req, res) => {
    const { productId } = req.params
    const singleProduct = await Product.findByIdAndDelete(productId)
    if (!singleProduct) {
        return res.status(400).json({
            message: "Invalid Product Id"
        })
    }

    const result = await Product.findByIdAndUpdate(productId,
        req.body
        , { new: true })

    res.json({
        message: "product deleted successfully",
        result
    })

})