var express = require('express');
// ROUTES FOR OUR API
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// on routes that end in /employees
router.route('/employees')

  // create an employee (accessed at POST http://localhost:3000/api/employees)
    .post(function(req, res) {

        var input = JSON.parse(JSON.stringify(req.body));

        req.getConnection(function (err, connection) {

            var data = {

                emp_no: input.emp_no,
                birth_date: input.birth_date,
                first_name: input.first_name,
                last_name: input.last_name,
                gender: input.gender,
                hire_date: input.hire_date

            };

            var query = connection.query("INSERT INTO employees set ? ", data, function (err, rows) {

                if (err) {
                    console.log("Error inserting : %s ", err);
                } else {
                    res.json({message: 'Employee Added'})
                }
            });

            console.log(query.sql);

        });
        
    })

  // get all the employees (accessed at GET http://localhost:3000/api/employees)
    .get(function(req, res) {
        req.getConnection(function(err, connection) {
            if (err) return next(err);

           var query = connection.query('SELECT * FROM employees LIMIT 0,10', [], function(err, results) {
                if (err) return next(err);

                res.json(results);
            });
            console.log(query.sql);
        });
    })

// on routes that end in /employees/:emp_no
// ----------------------------------------------------
router.route('/employees/:emp_no')

    // get the employee with that id (accessed at GET http://localhost:3000/api/employees/:emp_no)
    .get(function(req, res) {

        req.getConnection(function(err, connection) {
            if (err) return next(err);

            var query = connection.query('SELECT * FROM employees where emp_no = ?', req.params.emp_no, function(err, results) {
                if (err) return next(err);

                res.json(results);
            });
            console.log(query.sql);
        });
    })

// update the employee with this id (accessed at PUT http://localhost:3000/api/employees/:emp_no)
    .put(function(req, res) {

        var input = JSON.parse(JSON.stringify(req.body));
        var emp_no = req.params.emp_no;

        req.getConnection(function (err, connection) {

            var data = {

                emp_no: input.emp_no,
                birth_date: input.birth_date,
                first_name: input.first_name,
                last_name: input.last_name,
                gender: input.gender,
                hire_date: input.hire_date

            };

            var query = connection.query("UPDATE employees set ? WHERE emp_no = ? ",[data,emp_no], function(err, rows)
            {

                if (err) {
                    console.log("Error Updating : %s ", err);
                }else{
                    res.json({message: 'Employee Updated'})
                }
            });
            console.log(query.sql);

        });
    })

    // delete the employee with this id (accessed at DELETE http://localhost:3000/api/employees/:emp_no)
    .delete(function(req, res) {

        var emp_no = req.params.emp_no;

        req.getConnection(function (err, connection) {

            var query = connection.query("DELETE FROM employees  WHERE emp_no = ? ",[emp_no], function(err, rows)
            {

                if(err) {
                    console.log("Error deleting : %s ", err);
                }else{
                    res.json({ message: 'Successfully deleted' });
                }
            });
            console.log(query.sql);
        });
    });

module.exports = router;
