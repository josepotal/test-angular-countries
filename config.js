angular.module('scotchApp')

    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl : 'templates/home.html',
          controller  : 'mainController'
        })

        .when('/about', {
          templateUrl : 'templates/about.html',
          controller  : 'aboutController'
        })

        .when('/contact', {
          templateUrl : 'templates/contact.html',
          controller  : 'contactController'
        })
        .otherwise('/');
  });