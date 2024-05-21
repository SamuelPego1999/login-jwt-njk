import { connection } from "../../db/connection.js";
import bcrypt from "bcryptjs"

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
      const salt = await bcrypt.genSalt(5)
      const encryptedPassword = await bcrypt.hash(password,salt)
      const [result, fields] = await connection.query(
        "INSERT INTO users (email,password) VALUES(?,?)",
        [email, encryptedPassword]
      );
      return res.status(201).send({ message: "usuario creado exitosamente" });
    }
      return res.status(400).send({ message: "ya se a utilizado ese email" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
