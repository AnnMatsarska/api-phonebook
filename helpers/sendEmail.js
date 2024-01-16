const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "matsarskaannna@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "matsarskaannna@meta.ua" };
  await transporter
    .sendMail(email)
    .then(() => console.log("Email sent successfully"))
    .catch((error) => console.log(error.message));
  return true;
};

module.exports = sendEmail;
