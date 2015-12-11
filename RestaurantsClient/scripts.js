/**
 * Created by inet2005 on 12/11/15.
 */
/**
 * Created by inet2005 on 11/26/15.
 * in AngularAPIClient
 */

(function(){

    var app = angular.module('myApp',['ngResource']);

    app.factory("Restaurant", function($resource) {
        return $resource("http://localhost:3000/api/restaurants/:_id",null,{
            'update': { method:'PUT' }
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

            Restaurant.query({ restaurant_id: restaurantId }, function(data) {
                $scope.selectedRestaurant = data[0];
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
                restaurant_id: $scope.newRestaurantID
            };

            $scope.message = Restaurant.save(data);
        };//end of addRestaurant()

        //*****************************************************************
        //deletes a restaurant from database
        $scope.deleteRestaurant = function(restaurantId){

            console.log("In Angular deleteRestaurant method ..."); //used to see where we are

            $scope.message = Restaurant.delete({ restaurant_id: restaurantId });
        };//end of deleteRestaurant()

        //*****************************************************************
        //updates a restaurant in the database
        $scope.updateRestaurant = function(restaurantId){

            console.log("In Angular updateRestaurant method ..."); //used to see where we are

            var upBorough      = document.getElementById('updateRestaurantBorough' + restaurantId).innerHTML;
            var upCuisine      = document.getElementById('updateRestaurantLName' + restaurantId).innerHTML;
            var upName         = document.getElementById('updateRestaurantBorough' + restaurantId).innerHTML;
            var upRestaurantID = document.getElementById('updateRestaurantLName' + restaurantId).innerHTML;

            var restaurant = Restaurant.query({restaurant_id: restaurantId},function(data) {

                var data = {
                    borough       : upBorough,
                    cuisine       : upCuisine,
                    name          : upName,
                    restaurant_id : upRestaurantID
                };

                $scope.message = Restaurant.update({restaurant_id: restaurantId},data);
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