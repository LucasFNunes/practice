const Produtos = require("../../produtos/schemas/schema");

async function execute(body) {
  if (body.nameServico.length > 50) {
    throw Error("Nome do Servico invalido.");
  }
  const produtos = await Produtos.findOne({ _id: body.produtoid });
  if (!produtos) {
    throw Error("Produto Não Existe.");
  }

  const Produto = await Produtos.findOneAndUpdate(
    { _id: body.produtoid },
    {
      $push: {
        Servicos: [
          {
            name: body.nameServico,
            qtd: body.qtdServico,
          },
        ],
      },
    },
    { new: true }
  );

  return Produto;
}

module.exports = { execute };
