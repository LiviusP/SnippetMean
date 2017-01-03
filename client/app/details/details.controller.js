'use strict';

angular.module('workspaceApp')
  .controller('DetailsCtrl', function ($scope,$http,$stateParams,$state) {
    $scope.message = 'Hello';
    $scope.id = $stateParams.id;
    
    $scope.snippet = {};
      $http.get('/api/things/' + $scope.id ).then(response => {
      $scope.snippet = response.data;
      console.log($scope.snippet);
    });
  
    $scope.delete = function(){
      
      $http.delete('/api/things/' + $scope.id).then(response => {
        
        $state.go('main');
        
      });
      
    };
    
  });
