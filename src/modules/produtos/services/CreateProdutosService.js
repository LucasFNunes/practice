const produtos = require("../schemas/schema.js");
const Empresas = require("../../empresas/schemas/schema");

async function execute(body) {
  if (body.nameProduto.length > 50) {
    throw Error("Nome do Produto invalido.");
  }
  const empresas = await Empresas.findOne({ _id: body.empresaid });
  if (!empresas) {
    throw Error("Empresa Não Existe");
  }
  const Produto = await produtos.create({
    name: body.nameProduto,
  });
  await Empresas.findOneAndUpdate(
    { _id: body.empresaid },
    {
      $push: {
        Produtos: [{ ProdutoID: Produto._id }],
      },
    },
    { new: true }
  );

  return Produto;
}

module.exports = { execute };
