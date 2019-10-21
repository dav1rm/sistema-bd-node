const { Client } = require("pg");

const connectionString = "postgresql://postgres:pgadmin@localhost:5432/prova";

const client = new Client(connectionString);

const executeQuery = async sqlQuery => {
  client.connect();

  try {
    const res = await client.query(sqlQuery);

    return { data: res };
  } catch (err) {
    console.log(err.stack);
  }
  client.end();
};

module.exports = {
  executeQuery
};
