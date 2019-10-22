const { executeQuery } = require("../config/database");

class DependenteController {
  async index(req, res) {
    const data = await executeQuery("SELECT * FROM dependente;");

    // Retornando dados para view
    return res.render("dependentes/list", data);
  }

  async create(req, res) {
    const empregados = await executeQuery(
      "SELECT nome || ' ' || nomedomeio || ' ' || sobrenome as nome, codigo FROM empregado;"
    );

    return res.render("dependentes/create", {
      empregados: empregados.data.rows
    });
  }

  async store(req, res) {
    const { nome, nascimento, sexo, empregado, parentestco } = req.body;

    const query = `INSERT INTO dependente (nome, dtnascimento, sexo, parentesco, empregado)`;
    const values = ` VALUES ('${nome}', '${nascimento}', '${sexo}', '${parentestco}', '${empregado}');`;

    try {
      await executeQuery(query + values);

      // Redirecionando para listagem
      return res.redirect("/dependentes");
    } catch (error) {}
  }
}
module.exports = new DependenteController();
