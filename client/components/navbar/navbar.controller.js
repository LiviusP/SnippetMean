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
  },
  {
    'title': 'About',
    'state': 'about'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('workspaceApp')
  .controller('NavbarController', NavbarController);
