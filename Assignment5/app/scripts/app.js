'use strict';

/**
 * @ngdoc overview
 * @name assignment5App
 * @description
 * # assignment5App
 *
 * Main module of the application.
 */
angular
  .module('assignment5App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


function loadList() {
//  var list = document.getElementById('tutorialList');
    var list = $("#tutorialList").listview();

$(tutorialList.products).each(function(index){
    $(list).append('<li id="listitem">' + this.title + " = " + this.author + '</li>');
});    $(list).listview("refresh");


// Json array
var tutorialList = JSON.parse(app\tutorials.Json);