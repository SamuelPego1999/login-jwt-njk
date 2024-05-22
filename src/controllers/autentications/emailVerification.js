import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "samuelhostinger@gmail.com",
      pass: "samuelhostinger.911911",
    },
  });
  const info = await transporter.sendMail({
    from: 'samuelhostinger@gmail.com',
    to: "samuelpego562@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", 
    html: "<b>Hello world?</b>",
  });
  console.log(info)