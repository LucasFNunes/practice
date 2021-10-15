const produtos = require("../schemas/schema.js");

async function execute(isAdmin) {
  if (!isAdmin) {
    throw Error("Somente o Admin pode ver.");
  }
  const listProdutos = await produtos.find();

  return listProdutos;
}

module.exports = { execute };
