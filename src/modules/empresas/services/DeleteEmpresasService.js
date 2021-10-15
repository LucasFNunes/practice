const empresas = require("../schemas/schema.js");

async function execute(_id, userID, isAdmin) {
  const Empresa = await empresas.findOne({ _id });
  if (!Empresa) {
    throw Error("Empresa Inexiste");
  }
  if (!isAdmin && Empresa.userID != userID) {
    throw Error("Não é possivel editar uma empresa que não é de sua autoria.");
  }
  await empresas.findOneAndDelete({ _id });
  return { msg: "Empresa apagado com sucesso!" };
}

module.exports = { execute };
