import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
//app.use(express.urlencoded())
//app.use(express.static("public"))
app.use(cookieParser())

import stockRouter from './routes/stock.routes.js'

app.use("/api/v1/stocks",stockRouter)

export { app }