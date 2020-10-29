const mysql = require("mysql");
const dbConfig = require("./db.config.js");

// Create a connection to the database
const connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

module.exports = connection;