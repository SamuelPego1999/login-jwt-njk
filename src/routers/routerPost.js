import express from "express"
import { signUp } from "../controllers/autentications/registration.js"
import { signIn } from "../controllers/autentications/login.js"

export const routerPost = express.Router()


routerPost.post("/signUp", signUp)
routerPost.post("/signIn", signIn)