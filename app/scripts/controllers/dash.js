'use strict';

angular.module('energenieApp')
  .controller('DashCtrl', function ($scope, User) {

  	$scope.name = User.User;
  	$scope.bills = [];

  	$scope.addBill = function(bill){
  		var newBill ={};
  		newBill.type = bill.type;
  		newBill.amount = bill.amount;
  		newBill.date = bill.date;

  		$scope.bills.push(newBill);
  	}

  });