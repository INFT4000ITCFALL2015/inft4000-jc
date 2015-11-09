angular.module('studentsApp',[])
    .controller('studentController',['$scope', '$http',function($scope, $http) {

        $scope.students = []; // end of students array

        $http.get('students.json').success(function (data) {
            $scope.students = data;
        });


        $scope.newStudent = function () {

            $scope.students.push({fName: $scope.firstName, lName: $scope.lastName, stuId: $scope.studentId});
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.studentId = '';
        };

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

        $scope.showDiv = function () {
            $scope.toShow = true;
        };

        $scope.hideDiv = function () {
            $scope.toShow = false;
        };

        $scope.predicate = 'stuId';
        $scope.reverse = true;
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };

        $scope.removeRow = function(name){
            var index = -1;
            var stuArr = eval( $scope.students );
            for( var i = 0; i < stuArr.length; i++ ) {
                if( stuArr[i].name === name ) {
                    index = i;
                    break;
                }
            }
            $scope.students.splice( index, 1 );
        };
    }]);
