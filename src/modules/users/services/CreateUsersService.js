const user = require("../schemas/schema.js");

async function execute(body) {
  if (body.age <= 18) {
    throw Error("A idade tem que ser maior que dezoito anos.");
  }
  if (!body.email) {
    throw Error("É necessario um email.");
  }
  if (body.name.length > 20) {
    throw Error("Nome muito grande.");
  }
  const ExistUser = await user.findOne({ email: body.email });
  if (ExistUser) {
    throw Error("Email já Cadastrado.");
  }
  const User = await user.create({
    name: body.name,
    age: body.age,
    email: body.email,
    password: body.password,
  });

  return User;
}
module.exports = { execute };
