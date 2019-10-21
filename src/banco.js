/*
* Exemplo de programação com banco de dados relacional Postgres usando javascript
* e a biblioteca libpq.
* 
* Download: https://www.npmjs.com/package/libpq
* Documentação: https://node-postgres.com
* 
* Para rodar:
* node exemplo.js
* 
* Ctrl+C para sair
*/

function inserirDepartamento() {
	pool.connect((err, client, done) => {
        if (err) {
            done();
            throw err;
        }
        client.query("INSERT INTO departamento (nome, codigo, gerente, iniciogerente) VALUES ('Secretaria', 99, '215112118', '2011-11-11');", (err, results) => {
            done(); 
            if (err) {
				console.log(err.stack)
			} else {
				console.log("Registro inserido com sucesso.")
		}
		client.end()
        });
    });
}

function listarDepartamentos() {
	pool.connect((err, client, done) => {
        if (err) {
            done();
            throw err;
        }
        client.query('SELECT d.nome as dnome, l.nome as lnome FROM departamento d LEFT JOIN local l ON d.codigo = l.departamento;', (err, results) => {
            done(); 
            if (err) {
				console.log(err.stack)
			} else {
				for (i in results.rows) {
					console.log(results.rows[i].dnome + " - " + results.rows[i].lnome)
				}
		}
        });
    });
}
function removerDepartamento() {
	pool.connect((err, client, done) => {
        if (err) {
            done();
            throw err;
        }
        client.query("DELETE FROM departamento WHERE codigo = 99;", (err, results) => {
            done(); 
            if (err) {
				console.log(err.stack)
			} else {
				console.log("Registro removido com sucesso.")
			}
		client.end()
        });
    });
}

const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:postgres@localhost:5432/prova'

const pool = new Pool({
  connectionString: connectionString,
})

pool.connect()

/* Não é possível garantir a ordem das operações. */

//inserirDepartamento()
listarDepartamentos()
//removerDepartamento()

pool.end()
