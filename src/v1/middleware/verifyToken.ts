import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { KEY } from '../constant'

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    // nếu access token có Bearer phía trc
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        const token: any = req.headers.authorization.split(' ')[1]

        const verify = jwt.verify(token, '123', (error: any, decode: any) => {
            if (error) return res.status(401).send('Invalid token!')
            console.log('decode', decode)

            next()
        })
        console.log('verify', verify)
    } else {    
        return res.status(401).send('Missing token!')
    }
}