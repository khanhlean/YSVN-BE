// Import thư viện Nodemailer
import nodemailer from 'nodemailer'
import crypto from 'crypto'

// Tạo một transporter với thông tin cấu hình email
export const sendMail = (email: any, code: string) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        service: 'gmail',
        auth: {
            user: 'nhlong23051@gmail.com',
            pass: process.env.APP_PASSWORD,
        },
    });

    // Sử dụng transporter để gửi email
    const info = transporter.sendMail({
        from: 'forgotpwd@gmail.com',
        to: email,
        subject: 'Forgot password',
        html: `
        <h5 style="font-size:20px; text-align:center">Vui lòng không chia sẻ mã này cho người khác!!</h5>
        <h5 style="font-size:20px; text-align:center">Đoạn mã này sẽ hết hạn sau 90 giây</h5>
            <div style="text-align:center">Đây là mã của bạn:</div>
            <div style="padding:10px 20px;text-align:center;font-size:30px; background-color:rgba(0,0,0,0.6);color: red">${code}</div>
        `
    })
    return info
}


export const createOTP = () => {
    const code = crypto.randomBytes(3).toString('hex')

    const otp: string = code.slice(0, 6).toUpperCase()

    return otp
}