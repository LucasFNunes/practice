const users = require("../schemas/schema.js");

async function execute(idade, isAdmin, userID) {
  const match = { age: { $gte: idade } };

  if (!isAdmin) {
    match._id = userID;
  }
  console.log(match);

  const listUsersByAge = await users.find(match);

  return listUsersByAge;
}

module.exports = { execute };
