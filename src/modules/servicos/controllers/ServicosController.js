const CreateServicosService = require("../services/CreateServicosService");
const DeleteServicosService = require("../services/DeleteServicosService");

async function create(req, res) {
  try {
    const item = await CreateServicosService.execute(req.body);

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
}

async function deleteServicos(req, res) {
  try {
    const item = await DeleteServicosService.execute(
      req.params.id,
      req.user,
      req.isAdmin
    );

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
}

module.exports = { create, deleteServicos };
