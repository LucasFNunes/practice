const path = require("path");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "516653145c60aa",
    pass: "82f609283fb97f",
  },
});

transport.use(
  "compile",
  hbs({
    viewEngine: {
      defaultLayout: undefined,

      partialsDir: path.resolve("./src/modules"),
    },

    viewPath: path.resolve("./src/modules"),

    extName: ".html",
  })
);
module.exports = transport;
