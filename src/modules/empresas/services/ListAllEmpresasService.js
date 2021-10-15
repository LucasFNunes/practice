const empresas = require("../schemas/schema.js");

async function execute(userID) {
  const listEmpresas = await empresas.find({
    userID,
  });

  return listEmpresas;
}

module.exports = { execute };
