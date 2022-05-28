# Angular JS Guide

## Introduction to AngularJS

AngularJs is a Javascript open-source front-end framework that is mainly used to develop single-page web applications(SPAs). It is a continuously growing and expanding framework which provides better ways for developing web applications. It changes the static HTML to dynamic HTML. Its features like dynamic binding and dependency injection eliminate the need for code that we have to write otherwise.AngularJs is rapidly growing and because of this reason, we have different versions of AngularJs with the latest stable being 1.8.2. It is also important to note that Angular is different from AngularJs. It is an open-source project which can be freely used and changed by anyone. It extends HTML attributes with Directives, and data is bound with HTML. 

### History

AngularJs was originally developed in 2008-2009 by Misko hevery and Adam abrons and is now maintained by Google.

### Benefits of AngularJS

- Dependency Injection is a software design pattern. It works on the basis of Inversion of Control. Inversion control means objects do not create other objects. Instead, they get these objects from an outside source. The dependent object is not created by the primary object after that then uses its methods. Instead, an external source creates the dependent object and gives it to the source object for further usage. On the basis of dependency injection, we create a service to acquire all the information from the database and get into the model class. 

- In Angular.JS, dependencies are injected by using an “injectable factory method” or “constructor function”.

- These components can be injected with “service” and “value” components as dependencies. 
The $http service is normally defined from within the controller in the following manner.

```js
sampleApp.controller (‘AngularJSController’, function ($scope, $http) {}) 
```

- The above content was taken from [GeeksForGeeks](https://www.geeksforgeeks.org/introduction-to-angularjs/)

## Resource

- [API reference](https://docs.angularjs.org/api)
- [Angular CDNs](https://code.angularjs.org/1.8.2/)
- [angular 1.8.2 npm](https://www.npmjs.com/package/angular/v/1.8.2)
- [XMLHttpRequest.readyState mdn](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)
- [$http.get(...).success is not a function](https://stackoverflow.com/questions/41169385/http-get-success-is-not-a-function)
- [angularjs 1.6.0 (latest now) routes not working](https://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working)
- [AngularJS Routing - Tutorials Teacher](https://www.tutorialsteacher.com/angularjs/angularjs-routing)