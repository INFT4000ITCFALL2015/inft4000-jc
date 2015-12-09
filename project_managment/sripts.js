angular.module('masterMindApp',[])
    .controller('gameController',['$scope',function($scope) {

        $scope.attemptCounter= 0;


        $scope.avalibleOption = ['Blue', 'Red', 'Purple', 'Green'];

        $scope.data = {
            availableOptions: [
                {id: 'Red', name: 'Red'},
                {id: 'Blue', name: 'Blue'},
                {id: 'Green', name: 'Green'},
                {id: 'Purple', name: 'Purple'}
            ],
            answerSet:['','','','']
        };

        //Declare patterns Array
        $scope.colourSets = [];

        $scope.counterUp = function(){
            $scope.attemptCounter ++;
        };

        $scope.getAnswerSet = function(){
            for(var i = 0; i <= 3; i++) {
                var index = Math.floor((Math.random() * 3));
                $scope.data.answerSet[i] = $scope.avalibleOption[index];
                //alert($scope.data.answerSet[i]);
            }
        };

        //Adding a new pattern to array
        $scope.newColourSet = function () {
            if($scope.attemptCounter > 7){
                alert('You have lost!')

            }else {
                $scope.colourSets.push({
                    colourOne: $scope.colOne,
                    colourTwo: $scope.colTwo,
                    colourThree: $scope.colThree,
                    colourFour: $scope.colFour,
                    matchedColours: 0,
                    matchedPosition: 0
                });
                $scope.ColourOneFound = 0;
                $scope.ColourTwoFound = 0;
                $scope.ColourThreeFound = 0;
                $scope.ColourFourFound = 0;
                $scope.checkAns();
                $scope.counterUp();
            }
        };

        $scope.checkAns = function (){

            $scope.checkColour();
            $scope.checkPosition();
            if($scope.colourSets[$scope.attemptCounter].matchedPosition == 4){
                alert('Your The Winner, hit Shift F5 to play Again!!!!!');
            }

        };

        $scope.checkColour = function (){

            for(var i = 0; i <= 3; i++) {
                if($scope.ColourOneFound==1){break;}
                if ($scope.colourSets[$scope.attemptCounter].colourOne == $scope.data.answerSet[i]){
                    $scope.colourSets[$scope.attemptCounter].matchedColours ++;
                    $scope.ColourOneFound = 1;
                }
            }

            for(var i = 0; i <= 3; i++) {
                if($scope.ColourTwoFound==1){break;}
                if ($scope.colourSets[$scope.attemptCounter].colourTwo == $scope.data.answerSet[i]){
                    $scope.colourSets[$scope.attemptCounter].matchedColours ++;
                    $scope.ColourTwoFound = 1;
                }
            }

            for(var i = 0; i <= 3; i++) {
                if($scope.ColourThreeFound==1){break;}
                if ($scope.colourSets[$scope.attemptCounter].colourThree == $scope.data.answerSet[i]){
                    $scope.colourSets[$scope.attemptCounter].matchedColours ++;
                    $scope.ColourThreeFound = 1;
                }
            }

            for(var i = 0; i <= 3; i++) {
                if($scope.ColourFourFound==1){break;}
                if ($scope.colourSets[$scope.attemptCounter].colourFour == $scope.data.answerSet[i]){
                    $scope.colourSets[$scope.attemptCounter].matchedColours ++;
                    $scope.ColourFourFound = 1;
                }
            }

        };

        $scope.checkPosition = function(){

            //for(var i = 0; i <= 3; i++) {
                if ($scope.colourSets[$scope.attemptCounter].colourOne == $scope.data.answerSet[0]){
                    $scope.colourSets[$scope.attemptCounter].matchedPosition ++
                }

                if ($scope.colourSets[$scope.attemptCounter].colourTwo == $scope.data.answerSet[1]){
                    $scope.colourSets[$scope.attemptCounter].matchedPosition ++
                }

                if ($scope.colourSets[$scope.attemptCounter].colourThree == $scope.data.answerSet[2]){
                    $scope.colourSets[$scope.attemptCounter].matchedPosition ++
                }

                if ($scope.colourSets[$scope.attemptCounter].colourFour == $scope.data.answerSet[3]) {
                    $scope.colourSets[$scope.attemptCounter].matchedPosition++
                }

        };



    }]);
