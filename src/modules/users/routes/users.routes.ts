const { Router } = require("express");
const users = require("../schemas/schema.js");

const ensureAuth = require("../../../shared/middlewares/EnsureAuthenticate");

const UsersController = require("../controllers/UsersController");

const routesUser = Router();

routesUser.get("/findall", ensureAuth, UsersController.findAll);

routesUser.get("/findfilter", ensureAuth, UsersController.findFilter);

routesUser.post("/create", UsersController.create);

routesUser.patch("/update", ensureAuth, UsersController.update);

routesUser.delete("/delete/:id", ensureAuth, UsersController.deleteUser);

routesUser.post("/forgotPassword", UsersController.forgotPassword);

routesUser.post("/resetPassword", UsersController.resetPassword);

module.exports = routesUser;
