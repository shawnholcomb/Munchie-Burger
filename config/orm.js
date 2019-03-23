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
    updateOne: function (rating, condition, cb) {
        var query = "UPDATE burgers SET devoured = true, rating = " + rating + " WHERE " + condition + ";";
        console.log(query);
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;