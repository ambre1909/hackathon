const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    category: {
        type: String,
        ref: "category",
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    packSize: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model("product", productSchema)