import { connection } from "../../db/connection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendEmailVerification } from "../../utilities/sendEmailVerification.js";

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
    const compare = await bcrypt.compare(password, result[0].password);
    if (!compare) {
      return res.status(401).send({ message: "contraseña incorrecta" });
    }

    if (result[0].verified  == "false") {
      const tokenVerification = jwt.sign({email:email},process.env.SECRET,{expiresIn:60})
      const sendEmail = await sendEmailVerification(email, tokenVerification);
      if (sendEmail) {
        return res
          .status(201)
          .send({
            message: `No estas verificado se envio un email a ${email} para la verificacion`,
          });
      } else {
        return res.status(500).send({ message: "ocurrio un error" });
      }
    }

    const tokenLogin = jwt.sign({ logged: true }, process.env.SECRET, {
      expiresIn: "10d",
    });
    const cookie = res.cookie("jwt", tokenLogin, {
      httpOnly: true,
      expires: new Date(Date.now() + 86400000 * 10),
    });

    return res.status(200).send({ message:"", redirect: "/section" });
  } catch (err) {
    res.status(500).send({ message: err });
    console.log(err)
  }
};
