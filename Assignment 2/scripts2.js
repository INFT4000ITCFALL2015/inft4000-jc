angular.module('studentsApp',[])
    .controller('studentController',['$scope', '$http',function($scope, $http) {

        //Declare Student Array
        $scope.students = [];

        //Get Students from JSON file
        $http.get('students.json').success(function (data) {
            $scope.students = data;
        });

        //Adding a new student to array
        $scope.newStudent = function () {

            $scope.students.push({fName: $scope.firstName, lName: $scope.lastName, stuId: $scope.studentId});
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.studentId = '';
        };

        //Function that determines if student ID has been taken, if not student is added
        $scope.addNewStudent = function () {

            if ($scope.students.length == 0) {
                $scope.newStudent();
            } else {
                var found = false;
                angular.forEach($scope.students, function (student) {
                    if (student.stuId == $scope.studentId) {
                        alert("Id has been taken");
                        found = true;
                    }
                });
                if (!found) {
                    $scope.newStudent();
                }
            }
        };

        //JSON view functions
        $scope.showDiv = function () {
            $scope.toShow = true;
        };

        $scope.hideDiv = function () {
            $scope.toShow = false;
        };

        //Order By Set Up
        $scope.predicate = 'stuId';
        $scope.reverse = true;
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };

        //Removing a student from the Array
        $scope.removeRow = function(id){
            var index = -1;
            var stuArr = eval( $scope.students );
            for( var i = 0; i < stuArr.length; i++ ) {
                if( stuArr[i].stuId === id ) {
                    index = i;
                    break;
                }
            }
            $scope.students.splice( index, 1 );
        };
    }]);
