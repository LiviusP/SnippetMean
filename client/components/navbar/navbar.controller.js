'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
  {
    'title': 'Insert',
    'state': 'insert'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('workspaceApp')
  .controller('NavbarController', NavbarController);
