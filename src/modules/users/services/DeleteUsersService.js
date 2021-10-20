const users = require("../schemas/schema.js");

async function execute(_id, userID, isAdmin) {
  const Users = await users.findOne({ _id });
  if (!Users) {
    throw Error("Usuario Inexiste");
  }
  if (!isAdmin && Users._id != userID) {
    throw Error("Não é possivel editar um Usuario que não é de sua autoria.");
  }
  await users.findOneAndDelete({ _id });
  return { msg: "Usuario apagado com sucesso!" };
}

module.exports = { execute };
