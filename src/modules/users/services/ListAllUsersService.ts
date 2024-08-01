const users = require("../schemas/schema.js");

async function execute(userID, isAdmin) {
  const match = {};
  if (!isAdmin) {
    match._id = userID;
  }
  const listUsers = await users.find(match);
  return listUsers;
}

module.exports = { execute };
