// MODULE
var app = angular.module('angularApp', ['ngRoute', 'ngMessages']);

app.config(['$routeProvider', function ($routeProvider){

  $routeProvider

    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })

    .when('/second/', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })

    .when('/second/:id', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })

}]);

// service

app.service('myService', function(){
  var self = this;
  this.name = 'AngularJs';
  this.nameLength = function() {
    return self.name.length;
  };
});


// CONTROLLERS
app.controller('mainController', ['$scope', '$log', '$filter', '$timeout', '$http', 'myService', function ($scope, $log, $filter, $timeout, $http, myService) {
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

  // accessing services
  $scope.pageName = myService.name;

  $scope.$watch('pageName', function() {
    myService.name = $scope.pageName;
  });

}]);

app.controller('secondController', ['$scope', '$log', '$routeParams', 'myService', function($scope, $log, $routeParams, myService) {
  $scope.name = $routeParams.id || 'default page';
  $log.log(myService.name);

  $scope.pageName = myService.name;

  $scope.$watch('pageName', function() {
    myService.name = $scope.pageName;
  });

  $scope.person = {
    name: 'Mr. James, Swordswith',
    designation: 'Law and Order',
    address: '27, maxian street, beach road',
    city: 'Detroit',
    state: 'Michigan',
    zip: '48203'
  };

  $scope.people = [
    {
      name: 'Mr. John, Smith',
      designation: 'Engineer',
      address: '53, Jain street, Cross road',
      city: 'New York',
      state: 'NY',
      zip: '231670'
    },
    {
      name: 'Mrs. Kate, Smith',
      designation: 'Teacher',
      address: '53, Jain street, Cross road',
      city: 'New York',
      state: 'NY',
      zip: '231670'
    },
    {
      name: 'Mr. Paul, Daniel',
      designation: 'Lawyer',
      address: '13, salmon street, mount road',
      city: 'Jercy',
      state: 'NY',
      zip: '231673'
    },
  ];


  $scope.formattedAddr = function(person) {
    return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip + '.'
  };

}]);

// directives

app.directive('searchResult', function() {
  return {
    restrict: 'AECM',
    templateUrl: 'directives/searchResult.html',
    replace: true,
    scope: {
      personName: '@', // @ is for string interpoation
      personObj: '=', // = is for object, it's two way binding
      formattedAddFn: '&' // & is for function
    }
  };
});

var searchPeople = function(firstName, lastName, Height, age, occupation) {
  return 'Anand Raja';
};

console.log(angular.injector().annotate(searchPeople));