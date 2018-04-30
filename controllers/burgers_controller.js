var express = require("express");
var router = express.Router();

var burger = require("./../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hndlbrsObj = {
            burgers: data
        };
        console.log(hndlbrsObj);
        res.render("index", hndlbrsObj);
        // var html = "<h1>Test</h1>"
        // res.send(html);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body);
    burger.create(["burger_name","devoured"], [req.body.burger_name, req.body.devoured], function(result){
        res.json({id: result.insertID});
        console.log("success adding")
    } );
});

router.put("/api/burgers/:id", function(req, res){
    burger.update(req.body.devoured, req.params.id, function(result){
        if(result.changedRows === 0){
            return res.status(404).end()
        }
        console.log("success updating")
        res.status(200).end();
    })
});

module.exports = router;