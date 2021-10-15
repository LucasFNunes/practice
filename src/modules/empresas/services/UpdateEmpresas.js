const empresas = require("../schemas/schema.js");

async function execute(body, userID, isAdmin) {
  if (!body.id) {
    throw Error("ID é Obrigatório.");
  }
  const Empre = await empresas.findOne({ _id: body.id });
  if (!Empre) {
    throw Error("Empresa Inexiste");
  }
  if (!isAdmin && Empre.userID != userID) {
    throw Error("Não é possivel editar uma empresa que não é de sua autoria.");
  }
  if (body.nameEmpresa.length > 100) {
    throw Error("Nome da Empresa invalido.");
  }
  if (body.cnpj.length > 14) {
    throw Error("CNPJ invalido.");
  }
  const Empresa = await empresas.findOneAndUpdate(
    { _id: body.id },
    {
      name: body.nameEmpresa,
      cnpj: body.cnpj,
    },
    { new: true }
  );

  return Empresa;
}

module.exports = { execute };
