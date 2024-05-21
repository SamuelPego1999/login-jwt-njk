import jwt from "jsonwebtoken"


export const tokenVerification = (req, res) => {
  try {
  const token = req.cookies.jwt;
  const verify = jwt.verify(token,process.env.SECRET);
  if (verify) {
   
    return true;
  } else {
   
    return false;
  }
}
catch(err) {
  return false;
}   
  } 
