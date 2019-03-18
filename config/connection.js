var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "b86d6c5651e4e7",
  password: "83ed091a",
  database: "heroku_d2a6fa44d49ff75"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;