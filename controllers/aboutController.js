(function() {
    'use strict';
    angular
    
        .module('scotchApp')
        .controller('aboutController', aboutController);

        aboutController.$inject = ['$scope', '$route'];

    function aboutController($scope, $route) {
        //var vm = this;
        $scope.message = 'Otra vista del ejemplo';
    }
})();