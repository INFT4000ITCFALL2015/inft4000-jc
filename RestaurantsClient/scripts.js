/**
 * Created by inet2005 on 12/11/15.
 */

(function(){

    var app = angular.module('myApp',['ngResource']);

    app.factory("Restaurant", function($resource) {
        return $resource(
            "http://localhost:3000/api/restaurants/:_id",
            null,
            {'update': { method:'PUT'}
        });
    });

    app.controller('restaurantController',function($scope,Restaurant){

        //*****************************************************************
        // initialize display report to false
        $scope.displayReport = false;

        //*****************************************************************
        // retrieve all restaurants from the API
        Restaurant.query(function(data) {

            console.log("In Angular query method ..."); //used to see where we are

            $scope.restaurants = data;
        });//end of query()

        //*****************************************************************
        //refresh table
        $scope.refreshRestaurants = function(){

            console.log("In Angular refreshRestaurants method ..."); //used to see where we are

            Restaurant.query(function(data) {
                $scope.restaurants = data;
            });
        };//end of refreshRestaurants()

        //*****************************************************************
        //displays a single restaurant record
        $scope.showRestaurant = function(restaurantId) {

            console.log("In Angular showRestaurant method ..."); //used to see where we are

            Restaurant.get({ _id: restaurantId }, function(data) {
                $scope.selectedRestaurant = data;
                console.log(data);
            });

            $scope.displayReport = true;
        };//end of showRestaurant()

        //*****************************************************************
        //adds a restaurant to database
        $scope.addRestaurant = function(){

            console.log("In Angular addRestaurant method ..."); //used to see where we are

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
        };//end of addRestaurant()

        //*****************************************************************
        //deletes a restaurant from database
        $scope.deleteRestaurant = function(restaurantId){

            console.log("In Angular deleteRestaurant method ..."); //used to see where we are

            $scope.message = Restaurant.delete({ _id: restaurantId });
        };//end of deleteRestaurant()

        //*****************************************************************
        //updates a restaurant in the database
        $scope.updateRestaurant = function(restaurantId){

            console.log("In Angular updateRestaurant method ..."); //used to see where we are

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
        };//end of updateRestaurant()

        //*****************************************************************
        //
        $scope.hideReport = function(){
            $scope.displayReport = false;
        };//end of hideReport()

        //*****************************************************************
    });

})();