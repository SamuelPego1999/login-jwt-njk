import express from "express"
import { getProducts } from "../controllers/getProducts.js"
import { tokenVerification } from "../utilities/tokenVerification.js"

export const routerGet = express.Router()


routerGet.get("/", (req,res)=> {
    const logged = tokenVerification(req,res)
    res.render("index.njk",{title:"app njk",logged:logged})
})
routerGet.get("/products", getProducts)

routerGet.get("/shop",(req,res)=>{
    const logged = tokenVerification(req,res)
    res.render("shop.njk",{logged:logged})
})
routerGet.get("/section",(req,res)=>{
    const logged = tokenVerification(req,res)
    res.render("section.njk",{title:"app njk",logged:logged})
})
routerGet.get("/logOut",(req,res)=>{
    res.clearCookie("jwt")
    res.render("section.njk",{title:"app njk",logged:false})
})

routerGet.get("/cart",(req,res)=> {
    res.render("cart.njk")
})