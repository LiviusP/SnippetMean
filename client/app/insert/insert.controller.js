'use strict';

angular.module('workspaceApp')
  .controller('InsertCtrl', function ($scope,$http,$state) {
    $scope.message = 'Hello';
    
     $scope.snippet = {};	
     $scope.notLoading = true;
	 
	  
 $scope.addThing  = function(){
  
    if ($scope.snippet) {
      $scope.notLoading = false;
      $http.post('/api/things', $scope.snippet).then(function(){
        
        $state.go('main');
        $scope.notLoading = true;
        $scope.snippet  = {};

        
      }  , function(){
        
         alert("Error");
        
      }); 
      

    }
    
  };
  });
