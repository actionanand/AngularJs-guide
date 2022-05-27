// MODULE
var app = angular.module('angularApp', ['ngMessages']);

// CONTROLLERS
app.controller('mainController', ['$scope', '$log', '$filter', '$timeout', function ($scope, $log, $filter, $timeout) {
  $scope.name = 'Anand Raja';
  
  $scope.filteredText = $filter('uppercase')($scope.name);
  $log.warn($scope.filteredText);

  $timeout(function() {
    $scope.name = 'AR';
  }, 3000);
}]);

var searchPeople = function(firstName, lastName, Height, age, occupation) {
  return 'Anand Raja';
};

console.log(angular.injector().annotate(searchPeople));