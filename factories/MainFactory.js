(function() {
  'use strict';
  
  angular
        .module('scotchApp')
        .factory('MainFactory', MainFactory);

    MainFactory.$inject = ['$http', '$rootScope', '$routeParams'];

    function MainFactory($http, $rootScope, $routeParams) {

        return {
          locationsList: locationsList
        };

         function locationsList() {
            var url = 'https://restcountries.eu/rest/v2/all';
            return $http.get(url)
                .then(getResults)
                .then(getCountriesData);
          }
      }
    
        ///// Helper functions to filter results
         function getResults (response) {
             return response.data;
         }
 
         function getCountriesData(response) {
             return response.map(function(elem) {
                 var countriesInfo = {
                     name: elem.name,
                     lat: elem.latlng[0],
                     long: elem.latlng[1],
                     flag: elem.flag
                 };
                 return countriesInfo;
             });
         }
})();
