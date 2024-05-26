import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const transporter = nodemailer.createTransport({
  host: process.env.HOST_SERVICE,
  port: process.env.HOST_PORT,
  secure:process.env.PORT_SECURITY,
  auth: {
    type: process.env.AUTORIZATION_TYPE,
    user: process.env.USER_CLIENT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
  },
});
export const sendEmailVerification = async (email,token)=> {
  const info = await transporter.sendMail({
    from: process.env.USER_CLIENT,
    to: email,
    subject: "Hello ✔",
    html: `<div>Hola ya esta a un paso de autenticarse en nuestra plataforma de click en el enlace para completar el proceso <a href="http://localhost:3000/userVerification/${token}">enlace de verificacion</a></div>`,
  });
  if (info.accepted.length == 0) {
     return false;
    }
    return true;
}
