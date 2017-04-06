(function() {
    'use strict';
    angular
    
        .module('scotchApp')
        .controller('contactController', contactController);

        contactController.$inject = ['$scope', '$route'];

    function contactController($scope, $route) {
        $scope.message = 'Vista de contacto';
    }
})();