'use strict';

angular.module('workspaceApp')
  .controller('InsertCtrl', function ($scope,$state, SnippetService) {
    $scope.message = 'Hello';
    
     $scope.snippet = {};	
     $scope.notLoading = true;
     $scope.errorsVisible = false;
	 
	  
 $scope.addThing  = function(){
  
    if ($scope.snippet) {
      $scope.notLoading = false;
      $scope.snippet.updated = false;
      SnippetService.addSnippet($scope.snippet).then(function(){
        $state.go('main');
        $scope.notLoading = true;
        $scope.snippet  = {};
      }, function(){
         alert("Error");
      }); 
    }
  };

  $scope.showErrors = function() {
    console.log(true);
      $scope.errorsVisible = true;
  };
});
