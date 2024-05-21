import { tokenVerification } from "../utilities/tokenVerification.js"


export const section = (req,res)=> {
    const verify = tokenVerification(req,res)
    res.render("index.njk",{logged:verify})
}
