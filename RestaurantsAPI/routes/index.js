var express = require('express');
var router = express.Router();
var restaurantController = require('../controllers/restaurantController');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// ----------------------------------------------------
router.route('/restaurants')

    .post(restaurantController.store)

    .get(restaurantController.index);

router.route('/restaurants/:_id')

    .get(restaurantController.show)

    .put(restaurantController.update)

    .delete(restaurantController.destroy);

router.route('/restaurants/page/:page_id')

    .get(restaurantController.page);

module.exports = router;
