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

  // $scope.rules = [
  //   {RuleName: 'Must be 5 characters'},
  //   {RuleName: 'Must not be used else where'},
  //   {RuleName: 'Must be cool'}
  // ];

  $scope.alertClick = function() {
    alert('You clicked me!');
  }

  // XML http req
  // if result didn't arrive, use this code (with $apply)
  
  // rulesReq.onreadystatechange = function () {
  //   $scope.$apply(function () {
  //     if (rulesReq.readyState == 4 && rulesReq.status == 200) {
  //       $scope.rules = JSON.parse(rulesReq.responseText);
  //     }
  //   });
  // }

  var rulesReq = new XMLHttpRequest();
  var url = 'https://raw.githubusercontent.com/actionanand/json-server/main/db/api/angular-js/rough-work/rules.json';


  rulesReq.onreadystatechange = function () {
    if (rulesReq.readyState == 4 && rulesReq.status == 200) {
      $scope.rules = JSON.parse(rulesReq.responseText);
    }
  }

  rulesReq.open("GET", url, true);
  rulesReq.send();

}]);

var searchPeople = function(firstName, lastName, Height, age, occupation) {
  return 'Anand Raja';
};

console.log(angular.injector().annotate(searchPeople));