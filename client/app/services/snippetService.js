'use strict';

angular.module('workspaceApp')
	.service('SnippetService', function($http){

		this.getAllSnippets = function() {
			return $http.get('/api/things');
		};

		this.addSnippet = function(snippet) {
			return $http.post('/api/things', snippet);
		};

		this.getSnippet = function(id) {
			return $http.get('/api/things/' + id);
		};

		this.deleteSnippet = function(id) {
			return $http.delete('/api/things/' + id);
		};

		this.updateSnippet = function(id, snippet) {
			return  $http.put('api/things/' + id, snippet);
		};
	});