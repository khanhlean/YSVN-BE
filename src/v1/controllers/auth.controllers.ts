import express, { Request, Response } from "express";
import { changePasswordForgot, checkEmailForgotPassword, checkOTPService, getAllUser, loginService, registerService } from "../services/auth.service";
import { DataRegister } from "../types";

export const loginController = async (req: any, res: Response) => {

    const { email, pass_word }: any = req.body;
    // service
    const result = await loginService({ email, pass_word })
    return res.status(200).json(result)
}

export const registerController = async (req: Request, res: Response) => {

    const { email, pass_word, phone_number, user_name }: DataRegister = req.body;
    // service
    const result = await registerService({ email, pass_word, phone_number, user_name })
    return res.status(200).json(result)
}

export const getAllUserController = async (req: Request, res: Response) => {
    const result = await getAllUser()
    return res.status(200).json(result)
}

export const checkMail = async (req: Request, res: Response) => {
    const { email } = req.params
    const result = await checkEmailForgotPassword(email)
    return res.status(200).json(result)
}

export const checkOTP = async (req:Request, res:Response)=>{
    const {otp} = req.body
    const result = await checkOTPService(otp)
    return res.status(200).json(result)
}

export const changePass = async (req: Request, res: Response) => {
    const { pass_word, otp } = req.body
    const result = await changePasswordForgot({ pass_word, otp })
    return res.status(200).json(result)
}