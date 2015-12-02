angular.module('masterMindApp',[])
    .controller('gameController',['$scope',function($scope) {

        $scope.attemptCounter= 0;

        $scope.data = {
            availableOptions: [
                {id: 'Red', name: 'Red'},
                {id: 'Blue', name: 'Blue'},
                {id: 'Green', name: 'Green'},
                {id: 'Yellow', name: 'Yellow'}
            ],
            answerSet:[
                {c1: 'Blue'},
                {c2: 'Blue'},
                {c3: 'Blue'},
                {c4: 'Blue'}
            ]
        };

        //Declare patterns Array
        $scope.colourSets = [];

        $scope.counterUp = function(){
            $scope.attemptCounter ++;
            alert($scope.attemptCounter);
        };

        //Adding a new pattern to array
        $scope.newColourSet = function () {
            if($scope.attemptCounter > 7){

            }else {
                $scope.colourSets.push({
                    colourOne: $scope.colOne,
                    colourTwo: $scope.colTwo,
                    colourThree: $scope.colThree,
                    colourFour: $scope.colFour
                });
                $scope.checkAns();
                $scope.counterUp();
            }
        };

        $scope.checkAns = function (){

            var counter = 0;
            var found = false;
            //for(var i = 0; i < 5; i++) {
                if ($scope.colourSets[$scope.attemptCounter].colourOne == $scope.data.answerSet[0].c1) {
                    alert("c1 match");
                    found = true;
                }
            //}
            if (!found) {
                counter += 1;
            }

            return counter;

        }

    }]);
