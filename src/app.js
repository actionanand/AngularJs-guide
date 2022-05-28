// MODULE
var app = angular.module('angularApp', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })
    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })

});


// CONTROLLERS
app.controller('mainController', ['$scope', '$log', '$filter', '$timeout', '$http', function ($scope, $log, $filter, $timeout, $http) {
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
      $scope.rules1 = JSON.parse(rulesReq.responseText);
    }
  }

  rulesReq.open("GET", url, true);
  rulesReq.send();

  // using $http service

  $http.get(url).then(successCallback, errorCallback);

  function successCallback(response) {
    $scope.rules = response.data;
  }

  function errorCallback(error) {
    console.log('error occurred!');
    console.log(error.data);
    console.log(error.status);
  }

  // http post call

  $scope.newRule = '';

  $scope.addRule = function() {
    $http.post('/post/api', { newRule: $scope.newRule })
      .then(function(resp){
        $scope.rules = resp;
        $scope.newRule = '';
      }, function(error) {
        console.log(error.data);
      });
  }


  // temp adj to post call
  $scope.myId = 3;

  $scope.addRule1 = function() {
    $scope.myId += 1;
    var newRuleObj = { RuleName: $scope.newRule, ID: $scope.myId }

    $scope.rules.push(newRuleObj);
    $scope.newRule = '';
  }

}]);

app.controller('secondController', ['$scope', '$log', function($scope, $log) {

}]);

var searchPeople = function(firstName, lastName, Height, age, occupation) {
  return 'Anand Raja';
};

console.log(angular.injector().annotate(searchPeople));