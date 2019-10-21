const { executeQuery } = require("../config/database");

class EmpregadoController {
  async index(req, res) {
    const data = await executeQuery("SELECT * FROM empregado;");

    // Retornando dados para view
    return res.render("empregados/list", data);
  }

  async create(req, res) {
    const departamentos = await executeQuery(
      "SELECT nome, codigo FROM departamento;"
    );
    const gerentes = await executeQuery(
      "SELECT nome || ' ' || nomedomeio || ' ' || sobrenome as nome, codigo FROM empregado;"
    );

    return res.render("empregados/create", {
      departamentos: departamentos.data.rows,
      gerentes: gerentes.data.rows
    });
  }

  async store(req, res) {
    const {
      nome,
      meio,
      sobrenome,
      codigo,
      nascimento,
      sexo,
      salario,
      gerente,
      departamento,
      endereco
    } = req.body;

    const query = `INSERT INTO empregado (nome, nomedomeio, sobrenome, codigo, dtnascimento, sexo, salario, gerente, departamento, endereco)`;
    const values = ` VALUES ('${nome}', '${meio}', '${sobrenome}', '${codigo}', '${nascimento}', '${sexo}', '${salario}', '${gerente}', '${departamento}', '${endereco}');`;

    try {
      await executeQuery(query + values);

      // Redirecionando para listagem
      return res.redirect("/empregados");
    } catch (error) {}
  }
}
module.exports = new EmpregadoController();
