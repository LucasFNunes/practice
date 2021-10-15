const mongoose = require("../../../shared/database/database");
const Schema = mongoose.Schema;

const users = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 1 },
  email: { type: String, required: true },
  password: String,
});

const Produtos = new Schema({
  nameProduto: { type: String, required: true },
  servicos: [{ nome: { type: String, required: true }, qtd: { type: Number } }],
});

module.exports = mongoose.model("Users", users);
module.exports = mongoose.model("Produtos", Produtos);
