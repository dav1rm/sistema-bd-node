const { executeQuery } = require("../config/database");

class TrabalhaEmController {
  async index(req, res) {
    const data = await executeQuery("SELECT * FROM trabalhaem;");

    // Retornando dados para view
    return res.render("trabalhaem/list", data);
  }

  async create(req, res) {
    const empregados = await executeQuery(
      "SELECT nome, codigo FROM empregado;"
    );
    const projetos = await executeQuery(
      "SELECT descricao, codigo FROM projeto;"
    );

    return res.render("trabalhaem/create", {
      empregados: empregados.data.rows,
      projetos: projetos.data.rows
    });
  }

  async store(req, res) {
    const { empregado, projeto, horas } = req.body;

    const query = `INSERT INTO trabalhaem (empregado, projeto, horas)`;
    const values = ` VALUES ('${empregado}', '${projeto}', '${horas}');`;

    try {
      await executeQuery(query + values);

      // Redirecionando para listagem
      return res.redirect("/trabalhaem");
    } catch (error) {}
  }

  async destroy(req, res) {
    const { empregado, projeto } = req.params;

    const query = `DELETE FROM trabalhaem WHERE empregado = '${empregado}' AND projeto = '${projeto}'`;

    try {
      await executeQuery(query);

      // Redirecionando para listagem
      return res.redirect("/trabalhaem");
    } catch (error) {}
  }
}
module.exports = new TrabalhaEmController();
