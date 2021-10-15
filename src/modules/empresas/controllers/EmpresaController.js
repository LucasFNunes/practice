const ListAllEmpresasService = require("../services/ListAllEmpresasService");
const CreateEmpresaService = require("../services/CreateEmpresaService");

async function findAll(req, res) {
  const items = await ListAllEmpresasService.execute(req.user, req.isAdmin);

  return res.send({ items });
}

async function create(req, res) {
  try {
    const item = await CreateEmpresaService.execute(req.body);

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e });
  }
}

module.exports = { findAll, create };
