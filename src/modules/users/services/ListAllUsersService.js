const users = require("../schemas/schema.js");

async function execute() {
  const listUsers = await users.find();

  return listUsers;
}

module.exports = { execute };
