'use strict';

angular.module('energenieApp').controller('MainCtrl', function ($scope, User, $location) {
	$scope.createUser = function(){
		User.User = $scope.Name;
		$location.path('/dash');
	};
});
