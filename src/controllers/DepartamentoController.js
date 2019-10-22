const { executeQuery } = require("../config/database");

class DepartamentoController {
  async index(req, res) {
    const data = await executeQuery("SELECT * FROM departamento;");

    // Retornando dados para view
    return res.render("departamentos/list", data);
  }

  async create(req, res) {
    const gerentes = await executeQuery(
      "SELECT nome || ' ' || nomedomeio || ' ' || sobrenome as nome, codigo FROM empregado;"
    );

    return res.render("departamentos/create", {
      gerentes: gerentes.data.rows
    });
  }

  async store(req, res) {
    const { nome, codigo, gerente, iniciogerente } = req.body;

    const query = `INSERT INTO departamento (nome, codigo, gerente, iniciogerente)`;
    const values = ` VALUES ('${nome}', '${codigo}', '${gerente}', '${iniciogerente}');`;

    try {
      await executeQuery(query + values);

      // Redirecionando para listagem
      return res.redirect("/departamentos");
    } catch (error) {}
  }

  async destroy(req, res) {
    const { codigo } = req.params;

    const query = `DELETE FROM departamento WHERE codigo = '${codigo}'`;

    try {
      await executeQuery(query);

      // Redirecionando para listagem
      return res.redirect("/departamentos");
    } catch (error) {}
  }
}
module.exports = new DepartamentoController();
