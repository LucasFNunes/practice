const ListAllProdutosService = require("../services/ListAllProdutosService");
const CreateProdutosService = require("../services/CreateProdutosService");
const UpdateProdutosService = require("../services/UpdateProdutosService");
const DeleteProdutosService = require("../services/DeleteProdutosService");

async function findAll(req, res) {
  const items = await ListAllProdutosService.execute(req.user, req.isAdmin);
  return res.send({ items });
}

async function create(req, res) {
  try {
    const item = await CreateProdutosService.execute(req.body);

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
}
async function update(req, res) {
  try {
    const item = await UpdateProdutosService.execute(
      req.body,
      req.user,
      req.isAdmin
    );

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
}
async function deleteProdutos(req, res) {
  try {
    const item = await DeleteProdutosService.execute(
      req.params.id,
      req.user,
      req.isAdmin
    );

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
}

module.exports = { findAll, create, update, deleteProdutos };
