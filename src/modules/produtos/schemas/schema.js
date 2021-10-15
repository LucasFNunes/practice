const mongoose = require("../../../shared/database/database");
const Schema = mongoose.Schema;

const Produtos = new Schema({
  name: { type: String, required: true },
  servicos: [{ name: { type: String }, qtd: { type: Number } }],
});

module.exports = mongoose.model("Produtos", Produtos);
