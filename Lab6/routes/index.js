var express = require('express');
var router = express.Router();
var employeeController = require('../controllers/employeeController');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// on routes that end in /employees
router.route('/employees')

  // create an employee (accessed at POST http://localhost:3000/api/employees)
    .post(employeeController.store)

  // get all the employees (accessed at GET http://localhost:3000/api/employees)
    .get(employeeController.index);

// on routes that end in /employees/:emp_no
// ----------------------------------------------------
router.route('/employees/:emp_no')

    // get the employee with that id (accessed at GET http://localhost:3000/api/employees/:emp_no)
    .get(employeeController.show)

// update the employee with this id (accessed at PUT http://localhost:3000/api/employees/:emp_no)
    .put(employeeController.update)

    // delete the employee with this id (accessed at DELETE http://localhost:3000/api/employees/:emp_no)
    .delete(employeeController.destroy);

module.exports = router;
