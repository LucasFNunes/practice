const produtos = require("../schemas/schema.js");
const empresa = require("../../empresas/schemas/schema");

async function execute(_id, userID, isAdmin) {
  const Empresa = await empresa.findOne({ "Produtos.ProdutoID": _id });
  const Produtos = await produtos.findOne({ _id });
  if (!Produtos) {
    throw Error("Produto Inexiste");
  }
  if (!isAdmin && Produtos.userID != userID) {
    throw Error("Não é possivel editar um produto que não é de sua autoria.");
  }
  await produtos.findOneAndDelete({ _id });

  await empresa.findOneAndUpdate(
    { _id: Empresa._id },
    {
      $pull: {
        Produtos: { ProdutoID: _id },
      },
    },
    { new: true }
  );

  return { msg: "Produto apagado com sucesso!" };
}

module.exports = { execute };
