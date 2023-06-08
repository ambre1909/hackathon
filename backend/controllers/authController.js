const User = require("./../models/User")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


exports.loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(401).json({
            message: "all fields are required"
        })
    }
    const result = await User.findOne({ email }).lean()
    if (!result) {
        return res.status(401).json({
            message: "email is not registered with us"
        })
    }
    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(401).json({
            message: "email or password  is wrong"
        })
    }
    if (!result.active) {
        return res.status(401).json({
            message: "account is blocked by admin"
        })
    }
    const token = jwt.sign({ id: result._id }, process.env.JWT_KEY,
        { expiresIn: "1w" }
    )


    res.json({
        message: "Login Success",
        result: {
            name: result.name,
            email: result.email,
            token
        }
    })
})


exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            throw new Error("all fields required")
        }
        const found = await User.findOne({ email })
        if (found) {
            throw new Error("email already exists")
        }
        const hashpass = await bcrypt.hash(password, 10)
        const result = await User.create({ name, email, password: hashpass })

        const token = jwt.sign({ id: result._id }, process.env.JWT_KEY)

        res.json({
            message: "User Register Successfully",
            result: {
                id: result._id,
                name,
                token
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,

        })
    }
}

exports.ForgetPassword = asyncHandler(async (req, res) => {
    const { email } = req.body
    const result = await User.findOne({ email }).lean()
    if (!result) {
        return res.status(400).json({
            message: "email is not registered with us"
        })
    }
    sendEmail({
        sendTo: email,
        sub: " about Forget password",
        msg: `hello ${result.name}
        we received request regarding reset password click on link to reset password
        http://localhost:3000/reset-password/${result._id}
        
        `
        ,
    })

    res.json({
        message: "reset password email send sucessfully ",

    })
})


exports.resetPassword = asyncHandler(async (req, res) => {
    const { password, userId } = req.body
    // console.log(password, userId)
    if (!password || !userId) {
        return res.status(400).json({
            message: "all fields are required"
        })
    }
    const hashpass = await bcrypt.hash(password, 10)
    const result = await User.findByIdAndUpdate(userId, { password: hashpass })

    res.json({
        message: "reset password  sucessfully ",

    })
})