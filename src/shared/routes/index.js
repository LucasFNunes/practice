const { Router } = require("express");

const routesUser = require("../../modules/users/routes/users.routes");
const routesAuth = require("../../modules/authenticate/routes/authenticate.routes");
const routesEmpresas = require("../../modules/empresas/routes/empresas.routes");
const routesProdutos = require("../../modules/produtos/routes/produtos.routes");
const routesServicos = require("../../modules/servicos/routes/servicos.routes");

const routes = Router();

routes.use("/users", routesUser);

routes.use("/empresas", routesEmpresas);

routes.use("/authenticate", routesAuth);

routes.use("/produtos", routesProdutos);

routes.use("/servicos", routesServicos);

module.exports = routes;
