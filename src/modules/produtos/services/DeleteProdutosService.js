const produtos = require("../schemas/schema.js");

async function execute(_id, userID, isAdmin) {
  const Produtos = await produtos.findOne({ _id });
  if (!Produtos) {
    throw Error("Produto Inexiste");
  }
  if (!isAdmin && Produtos.userID != userID) {
    throw Error("Não é possivel editar um produto que não é de sua autoria.");
  }
  await produtos.findOneAndDelete({ _id });
  return { msg: "Produto apagado com sucesso!" };
}

module.exports = { execute };
