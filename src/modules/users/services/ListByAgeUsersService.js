const users = require("../schemas/schema.js");

async function execute(idade) {
  const listUsersByAge = await users.find({ age: { $gte: idade } });

  return listUsersByAge;
}

module.exports = { execute };
