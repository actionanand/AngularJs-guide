// MODULE
var app = angular.module('angularApp', []);

// CONTROLLERS
app.controller('mainController', ['$scope', function ($scope) {
    console.log($scope);
}]);