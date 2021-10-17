const mongoose = require("../../../shared/database/database");
const Schema = mongoose.Schema;

const users = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 1 },
  email: { type: String, required: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model("Users", users);
