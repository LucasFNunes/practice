const empresas = require("../schemas/schema.js");

async function execute() {
  const listEmpresas = await empresas.find();

  return listEmpresas;
}

module.exports = { execute };
