const mongoose = require("../../../shared/database/database");
const Schema = mongoose.Schema;

const Empresas = new Schema({
  name: { type: String, required: true },
  cnpj: { type: Number, default: 1, required: true },
  Produtos: [{ ProdutoID: { type: String } }],
  userID: { type: String, required: true },
});

module.exports = mongoose.model("Empresas", Empresas);
