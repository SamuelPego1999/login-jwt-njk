import { connection } from "../../db/connection.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const regexp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  console.log(req.body);
  try {
    if (!email || !password) {
      return res.status(400).send({ message: "email or password empty" });
    } else if (!regexp.test(email)) {
      return res.status(400).send({ message: "invalid email" });
    }
    
    const [result, fields] = await connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (!result.length) {
      return res.status(401).send({ message: "email incorrecto" });
    }
    const compare = await bcrypt.compare(password,result[0].password)
    if (!compare) {
      return res.status(401).send({ message: "contraseña incorrecta" });
    }
    const token = jwt.sign({logged:true},process.env.SECRET)
    const cookie = res.cookie("jwt",token,{httpOnly:true})

    return res.status(200).send({redirect:"/section"})

    

    
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
