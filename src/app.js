// MODULE
var app = angular.module('angularApp', ['ngMessages']);

// CONTROLLERS
app.controller('mainController', ['$scope', '$log', '$filter', function ($scope, $log, $filter) {
  $scope.name = 'Anand Raja';
  console.log($scope);
  $scope.filteredText = $filter('uppercase')($scope.name);
  $log.warn($scope.filteredText);
}]);

var searchPeople = function(firstName, lastName, Height, age, occupation) {
  return 'Anand Raja';
};

console.log(angular.injector().annotate(searchPeople));