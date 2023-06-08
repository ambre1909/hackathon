const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/User")


exports.Protected = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({
            message: "please provide Token"
        })
    }

    const { id } = jwt.verify(token, process.env.JWT_KEY)
    if (!id) {
        return res.status(401).json({
            message: "invalid token"
        })
    }
    const result = await User.findById(id)
    if (!result.active) {
        return res.status(401).json({
            message: "account is blocked by admin"
        })
    }
    req.body.userId = id
    next()
})


