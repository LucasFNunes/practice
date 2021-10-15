const { Router } = require("express");
const ensureAuth = require("../../../shared/middlewares/EnsureAuthenticate");

const ProdutosController = require("../controllers/ProdutosController");

const routesProdutos = Router();

routesProdutos.get("/findall", ensureAuth, ProdutosController.findAll);

routesProdutos.post("/create", ensureAuth, ProdutosController.create);

routesProdutos.patch("/update", ensureAuth, ProdutosController.update);

routesProdutos.delete(
  "/delete/:id",
  ensureAuth,
  ProdutosController.deleteProdutos
);

module.exports = routesProdutos;
