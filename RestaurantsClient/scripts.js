/**
 * Created by inet2005 on 12/11/15.
 */

(function(){

    var app = angular.module('myApp' ,['ngResource', 'angularUtils.directives.dirPagination']);

    app.factory("Restaurant", function($resource) {
        return $resource(
            "http://localhost:3000/api/restaurants/:_id",
            null,
            {'update': { method:'PUT'}
        });
    });

    app.controller('restaurantController',function($scope,Restaurant){

        $scope.displayReport = false;


        Restaurant.query(function(data) {

            console.log("In Angular query method ...");

            $scope.restaurants = data;
        });

        $scope.refreshRestaurants = function(){

            console.log("In Angular refreshRestaurants method ...");

            Restaurant.query(function(data) {
                $scope.restaurants = data;
            });
        };

        $scope.showRestaurant = function(restaurantId) {

            console.log("In Angular showRestaurant method ...");

            Restaurant.get({ _id: restaurantId }, function(data) {
                $scope.selectedRestaurant = data;
                console.log(data);
            });

            $scope.displayReport = true;
        };

        $scope.addRestaurant = function(){

            console.log("In Angular addRestaurant method ...");

            var data = {
                borough:       $scope.newBorough,
                cuisine:       $scope.newCuisine,
                name:          $scope.newName,
                restaurant_id: $scope.newRestaurantID,
                date:          $scope.newDate,
                grade:         $scope.newGrade,
                score:         $scope.newScore,
                building:      $scope.newBuilding,
                street:        $scope.newStreet,
                zipcode:       $scope.newZipCode
            };

            $scope.message = Restaurant.save(data);
        };

        $scope.deleteRestaurant = function(restaurantId){

            console.log("In Angular deleteRestaurant method ...");

            $scope.message = Restaurant.delete({ _id: restaurantId });
        };

        $scope.updateRestaurant = function(restaurantId){

            console.log("In Angular updateRestaurant method ...");

            var upBorough      = document.getElementById('updateRestaurantBorough' + restaurantId).innerHTML;
            var upCuisine      = document.getElementById('updateRestaurantCuisine' + restaurantId).innerHTML;
            var upName         = document.getElementById('updateRestaurantName' + restaurantId).innerHTML;

            var restaurant = Restaurant.query({restaurant_id: restaurantId},function(data) {

                var data = {
                    borough       : upBorough,
                    cuisine       : upCuisine,
                    name          : upName
                };

                $scope.message = Restaurant.update({_id: restaurantId},data);
            });
        };

        $scope.hideReport = function(){
            $scope.displayReport = false;
        };

    });

})();