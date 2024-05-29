import { NextFunction } from "express"

export const notFound = (req: any, res: any, next: NextFunction) => {
    const error = new Error(`Route ${req.originalUrl} not found!`)
    res.status(404)
    next(error)
}

export const errorHandler = (error: Error, req: any, res: any, next: NextFunction) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    return res.status(statusCode).json({
        success: false,
        message: error?.message
    })
}