angular.module('studentsApp',[])
    .controller('studentController',function($scope){

        $scope.students = []; // end of students array

        $scope.newStudent = function(){

            $scope.students.push({fName:$scope.firstName, lName:$scope.lastName, stuId:$scope.studentId});
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.studentId = '';
        };

        $scope.addNewStudent = function(){

            if($scope.students.length == 0) {
                $scope.newStudent();
            }else{
                var found = false;
                angular.forEach($scope.students,function(student){
                        if (student.stuId == $scope.studentId) {
                            alert("Id has been taken");
                            found = true;
                        }
                });
                if(!found){
                    $scope.newStudent();
                }
            }
        };

        $scope.showDiv = function(){
            $scope.toShow = true;
        };

        $scope.hideDiv = function(){
            $scope.toShow = false;
        }


    })

;