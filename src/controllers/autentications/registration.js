import { connection } from "../../db/connection.js";
import bcrypt from "bcryptjs"
import { sendEmailVerification } from "../../utilities/sendEmailVerification.js";
import jwt from "jsonwebtoken"

export const signUp = async (req, res) => {
  const { email, password } = req.body;

  const regexp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
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
      const token = jwt.sign({email:email},process.env.SECRET,{expiresIn:60})
      const salt = await bcrypt.genSalt(5)
      const encryptedPassword = await bcrypt.hash(password,salt)
 
      const [result, fields] = await connection.query(
        "INSERT INTO users (email,password) VALUES(?,?)",
        [email, encryptedPassword]
      );
      const sendEmail = await sendEmailVerification(email,token)
      if (sendEmail) {
      return res.status(201).send({ message: `Usuario creado exitosamente hemos enviado un email de verificacion a ${email}`});
    }else {
      return res.status(500).send({message:"ocurrio un error"})
    }
    }
      return res.status(400).send({ message: "Ya se a utilizado ese email" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
