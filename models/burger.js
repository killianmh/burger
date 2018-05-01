var orm = require("./../config/orm.js");

var burger = {
    all: function(callback){
        orm.selectAll("burger", function(result){
            callback(result);
        });
    },
    create: function(cols, vals, callback){
        orm.insertOne("burger", cols, vals, function(result){
            callback(result);
        });
    },
    update: function(devoured, id, callback){
        orm.updateOne("burger", devoured, id, function(result){
            callback(result);
        });
    }
};

module.exports = burger;