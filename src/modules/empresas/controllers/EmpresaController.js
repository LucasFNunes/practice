const ListAllEmpresasService = require("../services/ListAllEmpresasService");
const CreateEmpresaService = require("../services/CreateEmpresaService");
const UpdateEmpresas = require("../services/UpdateEmpresasService");
const DeleteEmpresasService = require("../services/DeleteEmpresasService");

async function findAll(req, res) {
  const items = await ListAllEmpresasService.execute(req.user, req.isAdmin);

  return res.send({ items });
}

async function create(req, res) {
  try {
    const item = await CreateEmpresaService.execute(req.body);

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
}
async function update(req, res) {
  try {
    const item = await UpdateEmpresas.execute(req.body, req.user, req.isAdmin);

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
}
async function deleteEmpresa(req, res) {
  try {
    const item = await DeleteEmpresasService.execute(
      req.params.id,
      req.user,
      req.isAdmin
    );

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
}

module.exports = { findAll, create, update, deleteEmpresa };
