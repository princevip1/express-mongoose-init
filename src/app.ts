import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { Routes } from './routes'

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

export default app
