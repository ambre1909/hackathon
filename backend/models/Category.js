const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
}, { timestamps: true })

module.exports = mongoose.model("category", categorySchema)