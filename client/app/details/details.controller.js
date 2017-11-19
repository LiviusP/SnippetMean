'use strict';

angular.module('workspaceApp')
  .controller('DetailsCtrl', function ($scope,$stateParams,$state,SnippetService) {
    $scope.message = 'Hello';
    $scope.id = $stateParams.id;
    
    $scope.snippet = {};
     SnippetService.getSnippet($scope.id).then(response => {
      $scope.snippet = response.data;
    });
  
    $scope.delete = function() {
      SnippetService.deleteSnippet($scope.id).then(response => {        
        $state.go('main');
      });
    };

    $scope.update = function() {
      console.log("test");
      $scope.snippet.updated = true;
      if ($scope.edit && Object.keys($scope.edit).length > 0) {
          SnippetService.updateSnippet($scope.id, $scope.snippet).then(response => {
          });
      }
    };
    
});
