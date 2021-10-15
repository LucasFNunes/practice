const { Router } = require("express");
const ensureAuth = require("../../../shared/middlewares/EnsureAuthenticate");

const EmpresaController = require("../controllers/EmpresaController");

const routesEmpresas = Router();

// routesEmpresas.use(ensureAuth);

routesEmpresas.get("/findall", ensureAuth, EmpresaController.findAll);

routesEmpresas.post("/create", ensureAuth, EmpresaController.create);

routesEmpresas.patch("/update", ensureAuth, EmpresaController.update);

module.exports = routesEmpresas;
