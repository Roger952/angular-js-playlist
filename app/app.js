var app = angular.module('app', ['ngRoute']);


app.controller('NinjaController', function ($scope) {

    $scope.message = "hey y'all";

});


app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/inicio', {
            templateUrl: 'app/inicio/inicio.html',
            controller: 'NinjaController',
        }).otherwise({ redirectTo: '/inicio' }
        );
});