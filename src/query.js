// mysql querying page

const mysql = require("mysql");
const { loadConfig } = require("./config");

const connectionDetails = loadConfig();

const getConnection = () => mysql.createConnection(connectionDetails);

const query = (sql, values) => {
  console.log("query!", sql, values);

  return new Promise((resolve, reject) => {
    const connection = getConnection();

    connection.connect();

    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        return reject(error.sqlMessage);
      }
		if (results.length === 0) {
			return reject("No results found!");
		}
      return resolve(results);
    });

    connection.end();
  });
};

module.exports = {
  query
};
