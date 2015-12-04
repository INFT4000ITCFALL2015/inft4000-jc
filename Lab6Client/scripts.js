(function() {
    var app = angular.module('myApp', ['ngResource']);

    app.factory("Employee", function ($resource) {
        return $resource('http://localhost:3000/api/employees/:emp_no', null,{
            'update': { method:'PUT' }
        });
    });

    app.controller('employeeController', function ($scope, Employee) {
        // initialize display report to false
        $scope.diplayReport = false;

        //retrieve all employees from the API
        Employee.query(function (data) {
            $scope.employees = data;
        });

        $scope.refreshEmployees = function(){
            Employee.query(function(data) {
                $scope.employees = data;
            });
        };

        $scope.showEmployee = function (empNo) {

            Employee.query({emp_no: empNo}, function (data) {
                $scope.selectedEmployee = data[0];
            });

            $scope.displayReport = true;
        };

        $scope.hideReport = function(){
            $scope.displayReport = false;
        };

        $scope.addEmployee = function(){

            var data = {emp_no: $scope.newEmpNo,
                        birth_date: $scope.newBirthDate,
                        first_name: $scope.newFirstName,
                        last_name: $scope.newLastName,
                        gender: $scope.newGender,
                        hire_date: $scope.newHireDate};

            $scope.message = Employee.save(data)
        };

        $scope.deleteEmployee = function(empNo){

            $scope.message = Employee.delete({ emp_no: empNo})
        };

        $scope.updateEmployee = function(empNo){

            var bDate = document.getElementById('updateEmployeeBDate' + empNo).innerHTML;
            var fName = document.getElementById('updateEmployeeFName' + empNo).innerHTML;
            var lName = document.getElementById('updateEmployeeLName' + empNo).innerHTML;
            var gender = document.getElementById('updateEmployeeGender' + empNo).innerHTML;
            var hDate = document.getElementById('updateEmployeeHDate' + empNo).innerHTML;

            var employee = Employee.query({emp_no: empNo}, function(data){

                var data = {
                    emp_no: empNo,
                    birth_date: bDate,
                    first_name: fName,
                    last_name: lName,
                    gender: gender,
                    hire_date: hDate};

                $scope.message = Employee.update({emp_no: empNo}, data);
            });
        };
    });
})();