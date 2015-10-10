// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$httpProvider,$ionicConfigProvider){
  $ionicConfigProvider.navBar.alignTitle('center');
  $httpProvider.defaults.timeout = 9000;
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.text('');

  $stateProvider
  .state('index', {
    url: '/index',
    templateUrl: 'templates/home.html',
    controller: 'IndexCtrl'
  })
  .state('type', {
    url: '/type/{id:int}',
    templateUrl: 'templates/type.html',
    controller: 'TypeCtrl'
  })
  .state('play', {
    url: '/play',
    templateUrl: 'templates/playvideo.html',
    controller: 'PlayCtrl',
    params:{img:'',path: ''}
  })

  $urlRouterProvider.otherwise('/index');
})
