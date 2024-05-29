import jwt from 'jsonwebtoken'

export const createAccessToken = (role_code: number, key: any) => {
    return jwt.sign({ role_code }, key, { expiresIn: '3d' })
}

export const createRefreshToken = (role_code: number, key: any) => {
    return jwt.sign({ role_code }, key, { expiresIn: '7d' })
}