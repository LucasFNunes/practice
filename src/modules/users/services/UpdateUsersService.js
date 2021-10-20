const users = require("../schemas/schema.js");

async function execute(body, userID, isAdmin) {
  const Usuarios = await users.findOne({ _id: body.id });
  if (!Usuarios) {
    throw Error("Usuario Inexiste");
  }

  if (!isAdmin && Usuarios._id != userID) {
    throw Error("Não é possivel editar um Usuario que não é de sua autoria.");
  }

  if (body.age <= 18) {
    throw Error("A idade tem que ser maior que dezoito anos.");
  }
  if (body.name.length > 100) {
    throw Error("Nome do Usuario invalido.");
  }
  const Users = await users.findOneAndUpdate(
    { _id: body.id },
    {
      name: body.name,
      age: body.age,
      email: body.email,
    },
    { new: true }
  );

  return Users;
}

module.exports = { execute };
