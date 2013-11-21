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

    $scope.dateRangeFilter = function(bill){
      if ($scope.filter.startDate || $scope.filter.endDate)
        return (bill.date >= $scope.filter.startDate) && (bill.date <= $scope.filter.endDate)
      else
        return true;
    }

    $scope.showFilters = function(){
      var filters  = $('#filterBody');
        filters.slideDown();
    }

  });