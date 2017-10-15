// mysql querying page

const connectionDetails = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
};

const mysql = require("mysql");

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

      return resolve(results);
    });

    connection.end();
  });
};

module.exports = {
  query
};
