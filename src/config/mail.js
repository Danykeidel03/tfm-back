const config = {
  EMAIL_USER: "danykeidel03@gmail.com",
  EMAIL_PASS: "naajwwygylsxxjjl",
};

const createTransporter = () => {
  const nodemailer = require("nodemailer");

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.EMAIL_USER,
      pass: config.EMAIL_PASS,
    },
  });
};

module.exports = {config, createTransporter};
