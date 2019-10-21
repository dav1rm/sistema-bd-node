const express = require("express");

const routes = express.Router();

const EmpregadoController = require("./controllers/EmpregadoController");
// const DependenteController = require("./controllers/DependenteController");
// const DepartamentoController = require("./controllers/DepartamentoController");
// const LocalController = require("./controllers/LocalController");
// const ProjetoController = require("./controllers/ProjetoController");

routes.get("/empregados", EmpregadoController.index);
routes.get("/empregados/create", EmpregadoController.create);
routes.post("/empregados/store", EmpregadoController.store);

module.exports = routes;
