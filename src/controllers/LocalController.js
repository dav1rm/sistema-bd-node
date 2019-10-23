const { executeQuery } = require("../config/database");

class LocalController {
  async index(req, res) {
    const data = await executeQuery("SELECT * FROM local;");

    // Retornando dados para view
    return res.render("locais/list", data);
  }

  async create(req, res) {
    const departamentos = await executeQuery(
      "SELECT nome, codigo FROM departamento;"
    );

    return res.render("locais/create", {
      departamentos: departamentos.data.rows
    });
  }

  async store(req, res) {
    const { nome, departamento } = req.body;

    const query = `INSERT INTO local (nome, departamento)`;
    const values = ` VALUES ('${nome}', '${departamento}');`;

    try {
      await executeQuery(query + values);

      // Redirecionando para listagem
      return res.redirect("/locais");
    } catch (error) {}
  }

  async destroy(req, res) {
    const { nome, departamento } = req.params;

    const query = `DELETE FROM local WHERE nome = '${nome}' AND departamento = '${departamento}'`;

    try {
      await executeQuery(query);

      // Redirecionando para listagem
      return res.redirect("/locais");
    } catch (error) {}
  }
}
module.exports = new LocalController();
