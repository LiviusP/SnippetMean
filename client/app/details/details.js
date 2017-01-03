'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('details', {
        url: '/details/{id}',
        templateUrl: 'app/details/details.html',
        controller: 'DetailsCtrl'
      });
  });
