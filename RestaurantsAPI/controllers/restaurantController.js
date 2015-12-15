/**
 * Created by inet2005 on 12/10/15.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test/restaurants'); // connect to our database

var Restaurant = require('../models/Restaurant');

module.exports.store = function(req, res) {

    console.log("In controller store method...");

    var restaurant = new Restaurant();

    // Address Schema
    restaurant.borough = req.body.borough;
    restaurant.cuisine = req.body.cuisine;
    restaurant.name = req.body.name;
    restaurant.restaurant_id = req.body.restaurant_id;

    restaurant.grades.push({date: req.body.date, grade: req.body.grade, score: req.body.score});

    restaurant.address.push({building: req.body.building, street: req.body.street,
                                zipcode: req.body.zipcode});


    // save the bear and check for errors
    restaurant.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Restaurant created!' });
    });

};

module.exports.index = function(req, res) {

    console.log("In controller index method...");

    Restaurant.find().limit(2500).sort({_id: -1}).exec(function(err, restaurant) {
        if (err)
            res.send(err);

        res.json(restaurant);
    });
};

module.exports.page = function(req, res) {

    console.log("In controller page method...");


    var offSet = (req.params.page_id - 1) * 10;

    Restaurant.find().limit(10).skip(offSet).exec(function(err, restaurant) {
        if (err)
            res.send(err);

        res.json(restaurant);
    });
};


module.exports.show = function(req, res) {

    console.log("In controller show method...");

    Restaurant.findById(req.params._id, function(err, restaurant) {
        if (err)
            res.send(err);
        res.json(restaurant);
    });
};

module.exports.update = function(req, res) {

    console.log("In controller update method...");


    // use our bear model to find the bear we want
    Restaurant.findById(req.params._id, function(err, restaurant) {

        if (err)
            res.send(err);
        restaurant.name = req.body.name;
        restaurant.borough = req.body.borough;
        restaurant.cuisine = req.body.cuisine;

        //restaurant.grades.push({date: req.body.date, grade: req.body.grade, score: req.body.score});

        //restaurant.address.push({building: req.body.building, street: req.body.street,
        //                                                    zipcode: req.body.zipcode});

        // save the bear
        restaurant.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Restaurant updated!' });
        });
    });
};

module.exports.destroy = function(req, res) {
    Restaurant.remove({
        _id: req.params._id
    }, function(err, restaurant) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
};