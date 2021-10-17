const servicos = require("../../produtos/schemas/schema");

async function execute(_id, userID, isAdmin) {
  const Servicos = await servicos.findOne({ _id });
  if (!Servicos) {
    throw Error("Servicos Inexiste");
  }
  if (!isAdmin && Servicos.userID != userID) {
    throw Error("Não é possivel editar um produto que não é de sua autoria.");
  }
  await servicos.findOneAndDelete({ _id });
  return { msg: "Servicos apagado com sucesso!" };
}

module.exports = { execute };
