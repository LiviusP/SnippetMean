'use strict';

(function() {

class MainController {

  constructor(SnippetService) {
    this.snippets = [];

    SnippetService.getAllSnippets().then(response => {
            this.snippets = response.data;
    });

    
  }
}

angular.module('workspaceApp')
  .controller('MainController', MainController);

})();
