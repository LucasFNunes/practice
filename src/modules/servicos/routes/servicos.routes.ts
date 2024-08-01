const { Router } = require("express");
const ensureAuth = require("../../../shared/middlewares/EnsureAuthenticate");

const ServicosController = require("../controllers/ServicosController");

const routesServicos = Router();

routesServicos.post("/create", ensureAuth, ServicosController.create);

routesServicos.delete(
  "/delete/:id",
  ensureAuth,
  ServicosController.deleteServicos
);

module.exports = routesServicos;
