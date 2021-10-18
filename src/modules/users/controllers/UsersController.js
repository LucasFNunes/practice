const users = require("../schemas/schema.js");
const ListAllUsersService = require("../services/ListAllUsersService");
const ListByAgeUsersService = require("../services/ListByAgeUsersService");
const CreateUsersService = require("../services/CreateUsersService");
const DeleteUsersService = require("../services/DeleteUsersService");
const UpdateUsersService = require("../services/UpdateUsersService");

async function findAll(req, res) {
  const items = await ListAllUsersService.execute();

  return res.send({ items });
}

async function findFilter(req, res) {
  const idade = req.query.age;

  const listUsersAge = await ListByAgeUsersService.execute(idade);

  return res.json({ items: listUsersAge });
}
async function create(req, res) {
  try {
    const item = await CreateUsersService.execute(req.body);

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
}
async function update(req, res) {
  try {
    const item = await UpdateUsersService.execute(
      req.body,
      req.user,
      req.isAdmin
    );

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
}
async function deleteUser(req, res) {
  try {
    const item = await DeleteUsersService.execute(
      req.params.id,
      req.user,
      req.isAdmin
    );

    return res.send({ item });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
}
module.exports = { findAll, findFilter, create, update, deleteUser };
