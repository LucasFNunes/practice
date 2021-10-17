const servicos = require("../../produtos/schemas/schema");

async function execute(isAdmin) {
  if (!isAdmin) {
    throw Error("Somente o Admin pode ver.");
  }
  const listServicos = await servicos.find();

  return listServicos;
}

module.exports = { execute };
