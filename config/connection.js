var mysql = require("mysql");

// Server for ClearDB database
var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "b86d6c5651e4e7",
  password: "83ed091a",
  database: "heroku_d2a6fa44d49ff75"
});

// Server for localhost testing
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Ft041104",
//   database: "burgers_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;