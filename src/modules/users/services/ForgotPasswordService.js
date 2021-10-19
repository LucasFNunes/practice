const user = require("../schemas/schema.js");
const crypto = require("crypto");
const mailer = require("./MailerService");

async function execute(body) {
  if (!body.email) {
    throw Error("É necessario um email.");
  }
  console.log("b", user);

  const User = await user.findOne({ email: body.email });
  if (!User) {
    throw Error("Email não Cadastrado.");
  }
  console.log("a", User);

  const token = crypto.randomBytes(20).toString("hex");

  const now = new Date();
  now.setHours(now.getHours() + 1);

  const update = await user.findOneAndUpdate(
    { _id: User._id },
    {
      $set: {
        passwordResetToken: token,
        passwordResetExpires: now,
      },
    },
    { new: true }
  );
  console.log(update);

  mailer.sendMail({
    to: body.email,
    from: "ferreiranuneslucas13@gmail.com",
    template: "passwordChange/forgotPassword",
    context: { token },
  });

  return { msg: "Token enviado para o email solicitado!" };
}

module.exports = { execute };
