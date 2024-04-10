import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use( cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true 
}))
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({limit:'16kb', extended:'true'}))
app.use(express.static('public'))
app.use(cookieParser())

app.get('/', (req, res)=>{
    res.send('<h1>Hi,  Welcome to the world of Databases !</h1>');
})


//router import and Declaration

import userRouter  from "./src/routes/user.router.js";
app.use("/api/v1/users", userRouter)
//http://localhost:3000/api/v1/users/register


export {app};