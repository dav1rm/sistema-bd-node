const express = require("express");

const routes = express.Router();

const EmpregadoController = require("./controllers/EmpregadoController");
const DependenteController = require("./controllers/DependenteController");
const DepartamentoController = require("./controllers/DepartamentoController");
const LocalController = require("./controllers/LocalController");
const ProjetoController = require("./controllers/ProjetoController");

routes.get("/empregados", EmpregadoController.index);
routes.get("/empregados/create", EmpregadoController.create);
routes.post("/empregados/store", EmpregadoController.store);
routes.get("/empregados/delete/:codigo", EmpregadoController.destroy);

routes.get("/dependentes", DependenteController.index);
routes.get("/dependentes/create", DependenteController.create);
routes.post("/dependentes/store", DependenteController.store);
routes.get("/dependentes/delete/:codigo", DependenteController.destroy);

routes.get("/departamentos", DepartamentoController.index);
routes.get("/departamentos/create", DepartamentoController.create);
routes.post("/departamentos/store", DepartamentoController.store);
routes.get("/departamentos/delete/:codigo", DepartamentoController.destroy);

routes.get("/locais", LocalController.index);
routes.get("/locais/create", LocalController.create);
routes.post("/locais/store", LocalController.store);
routes.get("/locais/delete/:nome/:departamento", LocalController.destroy);

routes.get("/projetos", ProjetoController.index);
routes.get("/projetos/create", ProjetoController.create);
routes.post("/projetos/store", ProjetoController.store);
routes.get("/projetos/delete/:codigo", ProjetoController.destroy);

module.exports = routes;
