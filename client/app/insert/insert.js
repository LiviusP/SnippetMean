'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('insert', {
        url: '/insert',
        templateUrl: 'app/insert/insert.html',
        controller: 'InsertCtrl'
      });
  });
