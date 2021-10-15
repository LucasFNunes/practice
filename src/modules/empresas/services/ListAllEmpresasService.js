const empresas = require("../schemas/schema.js");

async function execute(userID, isAdmin) {
  const match = {};
  if (!isAdmin) {
    match.userID = userID;
  }

  const listEmpresas = await empresas.find(match);

  return listEmpresas;
}

module.exports = { execute };
