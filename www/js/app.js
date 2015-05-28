// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  // set the controller we use for ng-clikc to raise Google Maps
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html",
    controller: 'browCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.attractions', {
    url: '/attractions',
    views: {
      'tab-attr': {
        templateUrl: 'templates/tab-attr.html',
        controller: 'AttrsCtrl'
      }
    }
  })
  
  .state('tab.attr-detail', {
      url: '/attractions/:attrId',
      views: {
        'tab-attr': {
          templateUrl: 'templates/attr-detail.html',
          controller: 'AttractionDetailCtrl'
        }
      }
    })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.brow', {
      url: '/brow',
      views: {
        'tab-brow': {
          templateUrl: 'templates/tab-brow.html',
          controller: 'browCtrl'
        }
      }
    })
  .state('tab.mapper', {
    url: '/map',
    views: {
      'tab-mapper': {
        templateUrl: 'templates/tab-mapper.html',
        controller: 'mapCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/attractions');

});
