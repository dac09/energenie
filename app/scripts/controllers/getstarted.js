'use strict';

angular.module('energenieApp')
  .controller('GetstartedCtrl', function ($scope, User, $location) {
	$scope.user = User.User;
	$scope.gasProviders = ['British Gas', 'e.on', 'Scottish Power', 'npower', 'Zog Energy', 'SSE'];
	$scope.elecProviders = ['British Gas', 'e.on', 'Scottish Power', 'npower', 'EDF energy', 'ecotricity', 'LoCO2 Energy', 'Flow'];
	$scope.waterProviders = ['Affinity Water', 'Albion Water', 'Thames Water', 'Yorkshire Water'];
	$scope.enterProviders = function(){
		User.gas = $scope.gas;
		User.elec = $scope.elec;
		User.water = $scope.water;
		$location.path('/dash');
	}
  });
