angular.module('myApp',[]).controller('employeeController',function($scope,$http){

    $http.get('http://localhost:3000/api/employees').success(function(response){
        $scope.employees = response;
    });
});
