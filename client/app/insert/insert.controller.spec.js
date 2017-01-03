'use strict';

describe('Controller: InsertCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var InsertCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InsertCtrl = $controller('InsertCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
