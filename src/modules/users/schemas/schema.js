const mongoose = require("../../../shared/database/database");
const Schema = mongoose.Schema;

const users = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 1 },
  email: { type: String, required: true },
  password: String,
});
const Empresas = new Schema({
  nameEmpresa: { type: String, required: true },
  cnpj: { type: Number, default: 1, required: true },
  Produtos: [{ type: String, required: true }],
});
const Produtos = new Schema({
  nameProduto: { type: String, required: true },
  servicos: [{ nome: { type: String, required: true }, qtd: { type: Number } }],
});
module.exports = mongoose.model("Users", users);
