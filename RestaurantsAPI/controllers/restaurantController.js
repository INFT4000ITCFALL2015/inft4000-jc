/**
 * Created by inet2005 on 12/10/15.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test/restaurants'); // connect to our database

var Restaurant = require('../models/Restaurant');


module.exports.store = function(req, res) {

    var restaurant = new Restaurant();      // create a new instance of the Bear model
    restaurant.name = req.body.name;  // set the bears name (comes from the request)

    // save the bear and check for errors
    restaurant.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Restaurant created!' });
    });

};