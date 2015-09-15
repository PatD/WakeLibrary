// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js


// Our app is called WakeLibraryApp

  // We inject Ionic, ngSanitize (for HTML in RSS), and angular.filter for select box filtering

var WakeLibraryApp = angular.module('starter', ['ionic', 'ngSanitize', 'angular.filter']);

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






// So. Many. Views.
WakeLibraryApp.config(function($stateProvider, $urlRouterProvider) {

// Menu
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
          templateUrl: 'templates/home.html'
        }
      }
    })

// About page
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })

// Contact page
    .state('app.contact', {
          url: '/contact',
          views: {
            'menuContent': {
              templateUrl: 'templates/contact.html'
            }
          }
        })

// Ask WCPL FAQ screen
  .state('app.askwcpl', {
    url: '/askwcpl',
    views: {
      'menuContent': {
        templateUrl: 'templates/askwcpl/asklist.html',
        controller: 'AskwcplListCtrl'
      }
    }
  })

// Ask WCPL Details screen
  .state('app.askwcplDetails', {
    url: '/askwcpl/:answerid',
    views: {
      'menuContent': {
        templateUrl: 'templates/askwcpl/askdetail.html',
        controller: 'AskwcplDetailsCtrl'
      }
    }
  })

// Google Booksearch
    .state('app.booksearch', {
      url: '/search?gsc&q',
      views: {
        'menuContent': {
          templateUrl: 'templates/booksearch/search.html',
          controller: 'BookSearchCtrl'
        }
      }
    })

// Locations landing page
    .state('app.locations', {
      url: '/locations',
      views: {
        'menuContent': {
          templateUrl: 'templates/locations/locations.html',
          controller: 'LocationsCtrl'
        }
      }
    })

// Individual location
    .state('app.location', {
      url: '/locations/:locationId',
      views: {
        'menuContent': {
          templateUrl: 'templates/locations/location.html',
          controller: 'LocationCtrl'
        }
      }
    })
// Google maps location
    .state('app.locations-all', {
      url: '/locations/all',
      views: {
        'menuContent': {
          templateUrl: 'templates/locations/locations-all.html'
        }
      }
    })

// Twitter!
    .state('app.twitter', {
      url: '/twitter',
      views: {
        'menuContent': {
          templateUrl: 'templates/twitter.html',
          controller: 'TwitterCtrl'
        }
      }
    })

// Facebook
    .state('app.facebook', {
      url: '/facebook',
      views: {
        'menuContent': {
          templateUrl: 'templates/facebook.html',
          controller: 'FacebookCtrl'
        }
      }
    })

// Text to the Library
    .state('app.text', {
      url: '/text',
      views: {
        'menuContent': {
          templateUrl: 'templates/text.html'
        }
      }
    })


// Events landing page
    .state('app.eventsLanding', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'templates/events/events-landing.html'
        }
      }
    })

    // Views are recycled for each age group.

    // Events for adults
      .state('app.eventsAdult', {
        url: '/events/eventsAdult',
        views: {
          'menuContent': {
            templateUrl: 'templates/events/events-listing.html',
            controller: 'EventsAdultCtrl'
          }
        }
      })

      // Events for teens
        .state('app.eventsTeens', {
          url: '/events/eventsTeens',
          views: {
            'menuContent': {
              templateUrl: 'templates/events/events-listing.html',
              controller: 'EventsTeensCtrl'
            }
          }
        })


      // Events for kids
        .state('app.eventsKids', {
          url: '/events/eventsKids',
          views: {
            'menuContent': {
              templateUrl: 'templates/events/events-listing.html',
              controller: 'EventsKidsCtrl'
            }
          }
        })

        // Events ALL
          .state('app.eventsAll', {
            url: '/events/eventsAll',
            views: {
              'menuContent': {
                templateUrl: 'templates/events/events-listing.html',
                controller: 'EventsAllCtrl'
              }
            }
          })









          // News listing
            .state('app.news', {
              url: '/news',
              views: {
                'menuContent': {
                  templateUrl: 'templates/news/news-listing.html',
                  controller: 'NewsCtrl'
                }
              }
            })

            // NewsDetails
              .state('app.newsDetail', {
                url: '/news/:title',
                views: {
                  'menuContent': {
                    templateUrl: 'templates/news/news-details.html',
                    controller: 'NewsDetailCtrl'
                  }
                }
              })


// Loitering semicolon
    ;

//When we are without a view, we go home
  $urlRouterProvider.otherwise("/app/home");

});
