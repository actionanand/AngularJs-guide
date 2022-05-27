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

  $scope.handle = '';

  $scope.lowercaseHandle = function() {
    return $filter('lowercase')($scope.handle);
  }

  setTimeout(function() {
    // to make angular know about the changes and apply.digest loop
    $scope.$apply(function() { 
      $scope.handle = 'New-Handle';
    });
  }, 5000);

  $scope.charaters = 5;

  $scope.rules = [
    {ruleName: 'Must be 5 characters'},
    {ruleName: 'Must not be used else where'},
    {ruleName: 'Must be cool'}
  ];

  $scope.alertClick = function() {
    alert('You clicked me!');
  }

}]);

var searchPeople = function(firstName, lastName, Height, age, occupation) {
  return 'Anand Raja';
};

console.log(angular.injector().annotate(searchPeople));