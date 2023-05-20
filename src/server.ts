import express, {Express,Request,Response} from "express"
import { userRouter } from "./router"

const app:Express = express()

const port:string = process.env.PORT || "3001"

app.use(express.json())

app.use("/user", userRouter)

app.listen(port, ()=>{
    console.log("server initialized")
})