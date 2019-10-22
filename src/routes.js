const express = require("express");

const routes = express.Router();

const EmpregadoController = require("./controllers/EmpregadoController");
const DependenteController = require("./controllers/DependenteController");
const DepartamentoController = require("./controllers/DepartamentoController");
// const LocalController = require("./controllers/LocalController");
// const ProjetoController = require("./controllers/ProjetoController");

routes.get("/empregados", EmpregadoController.index);
routes.get("/empregados/create", EmpregadoController.create);
routes.post("/empregados/store", EmpregadoController.store);

routes.get("/dependentes", DependenteController.index);
routes.get("/dependentes/create", DependenteController.create);
routes.post("/dependentes/store", DependenteController.store);

routes.get("/departamentos", DepartamentoController.index);
routes.get("/departamentos/create", DepartamentoController.create);
routes.post("/departamentos/store", DepartamentoController.store);
routes.get("/departamentos/delete/:codigo", DepartamentoController.destroy);
module.exports = routes;
