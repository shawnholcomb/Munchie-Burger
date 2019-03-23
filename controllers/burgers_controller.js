var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var viewData = {
            burgers: data
        };
        res.render("index", viewData);
    });
});

router.post("/", function (req, res) {
    var newBurger = req.body.burger_name;
    burger.insertOne(newBurger, function (result) {
        res.json(result);
    })
});

router.put("/:rating/:id", function (req, res) {
    var rating = req.params.rating;
    var condition = "id = " + req.params.id;
    burger.updateOne(rating, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;