var connection = require("./connection.js");

var orm = {
    selectAll: function(table, callback){
        var queryString = "SELECT * FROM " + table + ";"
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function(table, cols, vals, callback){
        var queryString = "INSERT INTO " + table + "(" + cols.toString() + ") VALUES (?,?)";
        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;
            }
            callback(result);
        })
    },
    updateOne: function(table, devoured, id, callback){
        var queryString = "UPDATE " + table + " SET devoured = ? WHERE id = ?";
        connection.query(queryString,[devoured, id], function(err, result){
            if(err){
                throw err;
            }
            callback(result);
        })
    }
}

module.exports = orm;