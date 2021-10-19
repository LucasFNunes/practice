const user = require("../schemas/schema.js");
const crypto = require("crypto");
const mailer = require("./MailerService");

async function execute(body) {
  if (!body.email) {
    throw Error("É necessario um email.");
  }

  const User = await user.findOne({ email: body.email });
  if (!User) {
    throw Error("Email não Cadastrado.");
  }

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

  mailer.sendMail({
    to: body.email,
    from: "ferreiranuneslucas13@gmail.com",
    template: "passwordChange/forgotPassword",
    context: { token },
  });

  return { msg: "Token enviado para o email solicitado!" };
}

module.exports = { execute };
