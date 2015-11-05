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
                for(var x = 0; x < $scope.students.length; x++){
                    var idFromForm = $scope.studentId;
                    var idFromArray = $scope.students.stuId;
                    if(idFromArray == idFromForm){
                        alert("This Id Is Taken");
                        found = true;
                        break;
                    }
                }
                if (found == false){
                    $scope.newStudent();
                }
            }
        }; // end of add new student function


    }) // end of controller code

; // end of the module