const users = require("../schemas/schema.js");
const bcrypt = require("bcryptjs");

async function execute(body) {
  if (!body.email) {
    throw Error("É necessario um email.");
  }
  if (!body.password) {
    throw Error("É necessario uma nova senha.");
  }
  if (!body.token) {
    throw Error("É necessario o token que foi enviado em seu email.");
  }
  const User = await users
    .findOne({ email: body.email })
    .select("+passwordResetToken +passwordResetExpires");

  if (!User) {
    throw Error("Usuario não Cadastrado.");
  }

  if (body.token !== User.passwordResetToken) {
    throw Error(" Token Invalido.");
  }

  const now = new Date();

  if (now > users.passwordResetExpires) {
    throw Error(" Token Expirado, por favor, gere um novo.");
  }

  const hash = await bcrypt.hash(body.password, 15);

  const Users = await users.findOneAndUpdate(
    { _id: User._id },
    {
      password: hash,
    },
    { new: true }
  );

  return { msg: "Senha Alterada Com Sucesso!" };
}

module.exports = { execute };
