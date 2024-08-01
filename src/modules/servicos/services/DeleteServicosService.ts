const servicos = require("../../produtos/schemas/schema");

async function execute(_id, userID, isAdmin) {
  const Servicos = await servicos.findOne({ "Servicos._id": _id });
  if (!Servicos) {
    throw Error("Servicos Inexiste");
  }
  if (!isAdmin && Servicos.userID != userID) {
    throw Error("Não é possivel editar um produto que não é de sua autoria.");
  }
  await servicos.findOneAndUpdate(
    { _id: Servicos._id },
    {
      $pull: {
        Servicos: { _id },
      },
    },
    { new: true }
  );
  return { msg: "Serviço apagado com sucesso!" };
}

module.exports = { execute };
