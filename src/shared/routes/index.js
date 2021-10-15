const { Router } = require("express");

const routesUser = require("../../modules/users/routes/users.routes");
const routesAuth = require("../../modules/authenticate/routes/authenticate.routes");
const routesEmpresas = require("../../modules/empresas/routes/empresas.routes");

const routes = Router();

routes.use("/users", routesUser);

routes.use("/empresas", routesEmpresas);

routes.use("/authenticate", routesAuth);

module.exports = routes;
