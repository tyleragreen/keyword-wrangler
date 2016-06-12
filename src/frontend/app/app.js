'use strict';

(function() {

  var app = angular.module('app', ['ngRoute','ngGrid','restangular']);

  app.config(['$routeProvider',
    function($routeProvider) {
      // This makes app/keywordsKeywordsController.js handle the http://localhost:8080/ URL
      $routeProvider.
        when('/', {
          templateUrl: 'app/keywords/partials/editor.html',
          controller: 'KeywordsController'
        });
  }]);
})();
