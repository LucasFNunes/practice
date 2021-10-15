const mongoose = require("../../../shared/database/database");
const Schema = mongoose.Schema;

const users = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 1 },
  email: { type: String, required: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
});

const Produtos = new Schema({
  nameProduto: { type: String, required: true },
});

module.exports = mongoose.model("Users", users);
//module.exports = mongoose.model("Produtos", Produtos);
