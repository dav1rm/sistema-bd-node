const { executeQuery } = require("../config/database");

class ProjetoController {
  async index(req, res) {
    const data = await executeQuery("SELECT * FROM projeto;");

    // Retornando dados para view
    return res.render("projetos/list", data);
  }

  async create(req, res) {
    const departamentos = await executeQuery(
      "SELECT nome, codigo FROM departamento;"
    );

    return res.render("projetos/create", {
      departamentos: departamentos.data.rows
    });
  }

  async store(req, res) {
    const { descricao, codigo, departamento, local } = req.body;

    const query = `INSERT INTO projeto (descricao, codigo, departamento, local)`;
    const values = ` VALUES ('${descricao}', '${codigo}', '${departamento}', '${local}');`;

    try {
      await executeQuery(query + values);

      // Redirecionando para listagem
      return res.redirect("/projetos");
    } catch (error) {}
  }

  async destroy(req, res) {
    const { codigo } = req.params;

    const query = `DELETE FROM projeto WHERE codigo = '${codigo}'`;

    try {
      await executeQuery(query);

      // Redirecionando para listagem
      return res.redirect("/projetos");
    } catch (error) {}
  }
}
module.exports = new ProjetoController();
