var orm = require("./../config/orm.js");

var burger = {
    all: function(callback){
        orm.selectAll("burgers", function(result){
            callback(result);
        });
    },
    create: function(cols, vals, callback){
        orm.insertOne("burgers", cols, vals, function(result){
            callback(result);
        });
    },
    update: function(devoured, id, callback){
        orm.updateOne("burgers", devoured, id, function(result){
            callback(result);
        });
    }
};

module.exports = burger;