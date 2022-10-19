import express from "express"
import dotenv from "dotenv"
import "express-async-errors"
// db and authenticate user
import connectionDB from "./db/connect.js"
import morgan from "morgan"


//routers
import authRouter from "./routes/authRoutes.js"
import jobsRouter from "./routes/jobsRoutes.js"
// middleware

import errorHandlerMiddleware from "./middleware/error-handler.js"
import notFoundMiddleware from "./middleware/not-found.js"



dotenv.config()
const app = express()
if(process.env.NODE_ENV !==  'production'){
    app.use(morgan("dev"))
} //morgan就是一个可以在console看到你http request的middleware
app.use(express.json())


const port = process.env.PORT || 8000


app.get("/api/v1",(req,res)=>{
    // throw new Error("error")
    res.json({"你好":"Wellcome nimalegeb!"})
})

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/jobs",jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)




const start = async() =>{
    try{
        await connectionDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}...`)
        })
    }catch(error){
        console.log(error)
    }
}

start()