import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,//will accept requests from aa particular url stored in the CORS_ORIGIN in .env file
    credentials : true//see cors documentation to see from where we need the credentials
}))

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))//stores all info in a public storage
app.use(cookieParser())//to encode and decode cookies 

//routes import
import stockRouter from './routes/stock.routes.js'
import userRouter from './routes/user.router.js'
import farmerRouter from './routes/farmer.routes.js'

//routes declaration
app.use("/api/v1/stocks",stockRouter)
app.use("/api/v1/users",userRouter)
app.use("/api/v1/farmers",farmerRouter)

export { app }




//to accept data from json we need to use a json middleware that will limit the incoming json data
//app.use(express.json({limit: " 16kb "}))//to get data of a specific limit 
//app.use(express.urlencoded({extended:true,limit:"16kb"}))//url itself is encoded hence we use a middleware to parse the url 





