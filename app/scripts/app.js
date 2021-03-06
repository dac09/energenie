'use strict';

angular.module('energenieApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dash', {
        templateUrl: 'views/dash.html',
        controller: 'DashCtrl'
      })
      .when('/getstarted', {
        templateUrl: 'views/getstarted.html',
        controller: 'GetstartedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
