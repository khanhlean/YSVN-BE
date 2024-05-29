import { db, dbLocal } from "../models";
import * as bcrypt from 'bcrypt'
import { DataLogin, DataRegister, Result, User } from "../types";
import { createAccessToken, createRefreshToken } from "../middleware/auth.middle";
import { KEY } from "../constant";
import { createOTP, sendMail } from "../middleware/forgotPassword";

const hashPassWord = (pwd: any) => {
    return bcrypt.hashSync(pwd, bcrypt.genSaltSync(5))
}

export const loginService = async ({ email, pass_word }: DataLogin) => {
    try {
        let result: any = {}
        if (!email || !pass_word) return result = { statusCode: 404, message: "Mật khẩu và tài khoản không được để trống!" }

        result = await dbLocal('account_user').select().first().where({ email })
        if (!result) return result = { statusCode: 404, message: "Tài khoản không đúng hoặc không tồn tại!" }

        const isCheck = result && bcrypt.compareSync(pass_word, result.pass_word)

        const access_token = isCheck ? createAccessToken(result.role_code, '123') : null
        const refresn_token = isCheck ? createRefreshToken(result.role_code, KEY) : null

        return result = {
            statusCode: isCheck ? 200 : 401,
            message: isCheck ? 'Đăng nhập thành công!' : "Mật khẩu không đúng!",
            access_token: isCheck ? access_token : null,
            refresn_token: isCheck ? refresn_token : null,
            data: isCheck ? { user_name: result.user_name, email: result.email, phone_number: result.phone_number } : null
        }
    } catch (e) {
        console.error(e)
    }
}

export const registerService = async ({ user_name, email, pass_word, phone_number }: DataRegister) => {
    try {
        let result: any = {}
        let user = await dbLocal('account_user')
            .select()
            .where({ email })
            .first()
        if (user) return result = { statusCode: 409, message: "Tài khoản đã tồn tại!", data: null }

        await dbLocal('account_user')
            .insert({ user_name, email, pass_word: hashPassWord(pass_word), phone_number })


        result = await dbLocal('account_user')
            .select("user_name", "email", "phone_number").from('account_user')
            .where({ email })
            .first()
        return result = {
            statusCode: 200,
            message: "Đăng kí tài khoản thành công!",
            data: result
        }

    } catch (error) {
        console.log(error)
    }
}

export const getAllUser = async () => {
    let data = await dbLocal('account_user')
        .select()

    let result: any = {}
    return result = {
        statusCode: 200,
        message: 'Thành công!',
        data
    }
}

export const checkEmailForgotPassword = async (email: string) => {
    const otp = createOTP()
    let result: Result = {}

    const isCheck = await dbLocal('account_user').where({ email }).select('email').first()
    if (!isCheck) return result = { statusCode: 400, message: "Tài khoản không tồn tại!" }

    const data = await dbLocal('account_user')
        .where({ email })
        .update({ otp, exp_otp: Date.now() + (90 * 1000) })

    let info = dbLocal('account_user')
        .select('role_code', 'email', 'phone_number', 'otp', 'exp_otp')
        .where({ email })
        .first()

    sendMail(email, otp)

    return result = {
        statusCode: 200,
        message: "Thành công",
    }
}

export const checkOTPService = async (otp: any) => {
    let result: Result = {}
    const data: any = await dbLocal('account_user')
        .select('email', 'otp', 'exp_otp')
        .where({ otp })
        .first()

    if (!data) return result = { statusCode: 400, message: "OTP không tồn tại!" }
    // check OTP còn hạn không
    if (data?.exp_otp < Date.now()) return result = { statusCode: 400, message: "OTP đã hết hạn vui lòng thử lại!" }

    // check OTP đúng hay không
    if (data?.otp !== otp) return result = { statusCode: 400, message: "Mã otp không đúng vui lòng thử lại!" }

    return result = {
        statusCode: 200,
        message: "Thành Công!"
    }
}

export const changePasswordForgot = async ({ otp, pass_word }: any) => {
    let result: Result = {}

    await dbLocal('account_user')
        .where({ otp })
        .update({ pass_word: hashPassWord(pass_word), otp: null, exp_otp: null })

    return result = {
        statusCode: 200,
        message: "Thay đổi mật khẩu thành công!",
    }
}