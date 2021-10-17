const mongoose = require("../../../shared/database/database");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const users = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 1 },
  email: { type: String, required: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
});

users.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 15);
  this.password = hash;

  next();
});

module.exports = mongoose.model("Users", users);
