import jwt from "jsonwebtoken"
import env from "dotenv"
import { connection } from "../../db/connection.js";
env.config()
export const userVerification = async (req, res) => {
  console.log(req.params.token)
  try {
    if (!req.params.token) {
    res.cookie("token",false)
    res.redirect("/");
  } 
  const token = jwt.verify(req.params.token,process.env.SECRET)
  console.log(token)
  if (!token) {
    res.cookie("token",false)
    res.redirect("/");
  }
  
  if ((token.exp * 1000) < Date.now()) {
   
    res.cookie("token",false)
    res.redirect("/");

  }
  else if (!token.email) {
    res.cookie("token",false)
    res.redirect("/");

  }
  else if (token.email && token.exp * 1000 > Date.now() ) {
    
    const query = await connection.query(`UPDATE users
    SET verified = "true"
    WHERE email = ?`,[token.email])
    res.cookie("token",true)
    res.redirect("/");
  }
}catch(err) {
  res.cookie("token",false)
  res.redirect("/");
}
};
