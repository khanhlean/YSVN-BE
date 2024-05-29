import express from "express";
import { changePass, checkMail, checkOTP, getAllUserController, loginController, registerController } from "../controllers/auth.controllers";
import { verifyToken } from "../middleware/verifyToken";

const authRouter = express.Router()

authRouter.post('/login', loginController)
authRouter.post('/register', registerController)
authRouter.get('/get-user', verifyToken, getAllUserController)
authRouter.post('/check-mail/:email', checkMail)
authRouter.post('/check-otp', checkOTP)
authRouter.post('/change-pass', changePass)

export default authRouter