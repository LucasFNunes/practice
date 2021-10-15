const users = require("../../users/schemas/schema");
const jwt = require("jsonwebtoken");

async function execute({ email, password }) {
  const user = await users.findOne({ email });
  console.log(user);
  if (!user) throw Error("Usuário ou senha não encontrado.");

  if (user.password !== password)
    throw Error("Usuário ou senha não encontrado.");

  const token = jwt.sign(
    {
      idUser: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "1h",
    }
  );

  return { user: { name: user.name, email: user.email, id: user._id }, token };
}

module.exports = { execute };
