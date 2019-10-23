const { executeQuery } = require("../config/database");

class RelatorioController {
  async index(req, res) {
    // Retornando view home
    return res.render("index");
  }

  async create(req, res) {
    return res.render("relatorios/create");
  }

  async store(req, res) {
    const { sql } = req.body;

    try {
      const data = await executeQuery(sql);

      // Renderizando relatório
      return res.render("relatorios/list", data);
    } catch (error) {}
  }
}
module.exports = new RelatorioController();
