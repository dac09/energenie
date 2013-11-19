'use strict';

angular.module('energenieApp')
  .controller('DashCtrl', function ($scope, User) {
    $scope.user = User.User;
    $scope.gasProviders = ['British Gas', 'e.on', 'Scottish Power', 'npower', 'Zog Energy', 'SSE'];
    $scope.elecProviders = ['British Gas', 'e.on', 'Scottish Power', 'npower', 'EDF energy', 'ecotricity', 'LoCO2 Energy', 'Flow'];
    $scope.waterProviders = ['Affinity Water', 'Albion Water', 'Thames Water', 'Yorkshire Water']
  });
