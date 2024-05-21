import express, { json, urlencoded } from "express";
import cors from "cors";
import nunjucks from "nunjucks";
import dotenv from "dotenv";
import {dirname, join} from "path"
import { fileURLToPath } from "url";
import {routerGet} from "./routers/routerGet.js"
import { routerPost } from "./routers/routerPost.js";
import fileuplad from "express-fileupload"
import cookieParser from "cookie-parser";


const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
dotenv.config()
app.use(cors())
app.use(json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use(fileuplad({createParentPath:true}))
app.use(express.static(join(__dirname,"public")))

nunjucks.configure(["src/views","src/views/partials","src/views/modals","src/views/sections"],{
    autoescape:true,
    express:app
})

app.use(routerGet)
app.use(routerPost)

app.listen(process.env.PORT,()=> {
    console.log("app listen on port " + process.env.PORT)
})
