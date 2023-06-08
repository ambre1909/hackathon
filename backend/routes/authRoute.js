const { loginUser, registerUser, ForgetPassword, resetPassword } = require("../controllers/authController")
const { loginLimiter } = require("../middlewares/limiter")

const router = require("express").Router()

router
    .post("/register", registerUser)
    .post("/user/login", loginLimiter, loginUser)

    .post("/user/forget-password", loginLimiter, ForgetPassword)
    .post("/user/reset-password", loginLimiter, resetPassword)

module.exports = router