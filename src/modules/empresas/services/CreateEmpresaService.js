const empresas = require("../schemas/schema.js");

async function execute(body) {
  if (body.nameEmpresa.length > 100) {
    throw Error("Nome da Empresa invalido.");
  }
  if (body.cnpj.length > 14) {
    throw Error("CNPJ invalido.");
  }
  const Empresa = await empresas.create({
    name: body.nameEmpresa,
    cnpj: body.cnpj,
  });

  return Empresa;
}

module.exports = { execute };
