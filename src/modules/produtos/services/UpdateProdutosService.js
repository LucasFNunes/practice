const produtos = require("../schemas/schema.js");

async function execute(body, userID, isAdmin) {
  if (!body.id) {
    throw Error("ID é Obrigatório.");
  }
  const ProdutosEmpresas = await produtos.findOne({ _id: body.id });
  if (!ProdutosEmpresas) {
    throw Error("Empresa Inexiste");
  }
  if (!isAdmin && ProdutosEmpresas.userID != userID) {
    throw Error("Não é possivel editar um Produto que não é de sua autoria.");
  }
  if (body.nameProduto.length > 50) {
    throw Error("Nome do Produto invalido.");
  }
  const Produtos = await produtos.findOneAndUpdate(
    { _id: body.id },
    {
      name: body.nameProduto,
    },
    { new: true }
  );

  return Produtos;
}

module.exports = { execute };
