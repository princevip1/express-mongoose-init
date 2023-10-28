import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { Routes } from './routes'
import httpStatus from 'http-status'

const app: Application = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/v1', Routes)

// test route
app.get('/', (req, res) => {
    res.send('SMS API SERVER IS RUNNING')
})

// error handler
app.use(globalErrorHandler)

// handle not found 
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Not Found",
        errors: [{
            path:  req.originalUrl,
            message: "Api Not Found"
        }]
    })
    next()
})

export default app
