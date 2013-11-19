'use strict';

angular.module('energenieApp')
  .controller('DashCtrl', function ($scope, User) {

  	$scope.name = User.User;
  	$scope.gas = User.gas;
  	$scope.water = User.water;
  	$scope.elec = User.elec;


  });