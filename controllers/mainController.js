(function() {
    'use strict';
    angular
    
        .module('scotchApp')
        .controller('mainController', mainController);

        mainController.$inject = ['$scope', '$route', 'MainFactory'];

    function mainController($scope, $route, MainFactory) {
        $scope.message = 'Ejemplo sencillo para comprobaciones';

        //Call to the factory 
        MainFactory.locationsList()
            .then(getAllLoactions)
            .then(randomCountry);

            //////Helper functions to treat the data
            // Getting all locations list
            function getAllLoactions(response){
                $scope.locations = response;
                return $scope.locations;
            }
            //to get random default starting values
            function randomCountry (response){
                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min)) + min;
                }
                var randNum = getRandomInt(0,response.length);
                $scope.nameSelected = response[randNum].name;
                $scope.imgSelected = response[randNum].flag;
                $scope.latSelected = response[randNum].lat;
                $scope.longSelected = response[randNum].long;
            }

        //After selecting a location
        $scope.getLocation = function(event, location){
            $scope.nameSelected = location.name;
            $scope.imgSelected = location.flag;
            $scope.latSelected = location.lat;
            $scope.longSelected = location.long;
        };

        //Load more results
        $scope.limit = 6;
        $scope.limitResults = false;
        $scope.loadMore = function() {
            $scope.limit = $scope.locations.length;
            $scope.limitResults = !$scope.limitResults;
        };

        //Show only the first results
        $scope.showLess = function() {
            $scope.limit = 6;
            $scope.limitResults = !$scope.limitResults;
        };

    }
})();