var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (val, cb) {
        var query = "INSERT INTO burgers(burger_name, devoured) VALUES ('" + val.toString() + "', false)";
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (condition, cb) {
        // console.log(condition);
        var query = "UPDATE burgers SET devoured = true WHERE " + condition + ";";
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;