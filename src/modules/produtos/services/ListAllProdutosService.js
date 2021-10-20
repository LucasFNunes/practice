const produtos = require("../schemas/schema.js");
const empresas = require("../../empresas/schemas/schema");

async function execute(userID, isAdmin) {
  if (isAdmin) {
    const listProdutos = await produtos.find({});
    return listProdutos;
  }

  const empresa = await empresas.findOne({ userID });
  if (!empresa) {
    return [];
  }
  const lista = [];
  empresa.Produtos.map((value) => {
    lista.push(value.ProdutoID);
  });

  const listProdutos = await produtos.find({
    _id: {
      $in: lista,
    },
  });

  return listProdutos;
}

module.exports = { execute };
