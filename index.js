angular.module("angularApp",["ngMessages"]).controller("mainController",["$scope","$log","$filter","$timeout","$http",function(e,n,a,t,o){e.name="Anand Raja",e.filteredText=a("uppercase")(e.name),n.warn(e.filteredText),t((function(){e.name="AR"}),3e3),e.handle="",e.lowercaseHandle=function(){return a("lowercase")(e.handle)},setTimeout((function(){e.$apply((function(){e.handle="New-Handle"}))}),5e3),e.charaters=5;var l=new XMLHttpRequest,u="https://raw.githubusercontent.com/actionanand/json-server/main/db/api/angular-js/rough-work/rules.json";l.onreadystatechange=function(){4==l.readyState&&200==l.status&&(e.rules1=JSON.parse(l.responseText))},l.open("GET",u,!0),l.send(),o.get(u).then((function(n){e.rules=n.data}),(function(e){console.log("error occurred!"),console.log(e.data),console.log(e.status)})),e.newRule="",e.addRule=function(){o.post("/post/api",{newRule:e.newRule}).then((function(n){e.rules=n,e.newRule=""}),(function(e){console.log(e.data)}))},e.myId=3,e.addRule1=function(){e.myId+=1;var n={RuleName:e.newRule,ID:e.myId};e.rules.push(n),e.newRule=""}}]),console.log(angular.injector().annotate((function(e,n,a,t,o){return"Anand Raja"})));