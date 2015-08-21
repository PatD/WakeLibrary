// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js


// Our app is called WakeLibraryApp
var WakeLibraryApp = angular.module('starter', ['ionic', 'ngSanitize']);

// Run some Ionic/Cordovaish stuff
WakeLibraryApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});



// App view Config
WakeLibraryApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
// Home page
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('app.askwcpl', {
      url: '/askwcpl',
      views: {
        'menuContent': {
          templateUrl: 'templates/askwcpl.html',
          controller: 'AskwcplCtrl'
        }
      }
    })
    .state('app.booksearch', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/booksearch/search.html',
          controller: 'BookSearchCtrl'
        }
      }
    })
    .state('app.locations-all', {
      url: '/locations-all',
      views: {
        'menuContent': {
          templateUrl: 'templates/locations/locations-all.html',
          controller: 'LocationsAllCtrl'
        }
      }
    })
    .state('app.locations', {
      url: '/locations',
      views: {
        'menuContent': {
          templateUrl: 'templates/locations/locations.html',
          controller: 'LocationsCtrl'
        }
      }
    })
    .state('app.location', {
      url: '/locations/:locationId',
      views: {
        'menuContent': {
          templateUrl: 'templates/locations/location.html',
          controller: 'LocationCtrl'
        }
      }
    })
    .state('app.twitter', {
      url: '/twitter',
      views: {
        'menuContent': {
          templateUrl: 'templates/twitter.html',
          controller: 'TwitterCtrl'
        }
      }
    })
    .state('app.facebook', {
      url: '/facebook',
      views: {
        'menuContent': {
          templateUrl: 'templates/facebook.html',
          controller: 'FacebookCtrl'
        }
      }
    })
    .state('app.text', {
      url: '/text',
      views: {
        'menuContent': {
          templateUrl: 'templates/text.html'
        }
      }
    })
    .state('app.eventsLanding', {
      url: '/eventsLanding',
      views: {
        'menuContent': {
          templateUrl: 'templates/events/events-landing.html',
          controller: 'EventsLandingCtrl'
        }
      }
    })
    .state('app.eventsLanding.events', {
      url: '/eventsLanding/events',
      views: {
        'menuContent': {
          templateUrl: 'templates/events/events.html',
          controller: 'EventsCtrl'
        }
      }
    })
    /*
    .state('app.event', {
      url: '/event/:eventId',
      views: {
        'menuContent': {
          templateUrl: 'templates/events/event-details.html',
          controller: 'EventCtrl'
        }
      }
    })
    */


    ;

//When we are lost, we go home
  $urlRouterProvider.otherwise("/app/home");

});
