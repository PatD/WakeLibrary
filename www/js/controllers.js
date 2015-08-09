WakeLibraryApp.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});



// Controller that shows all locations on a map
  WakeLibraryApp.controller('LocationsAllCtrl', function($scope, $http, LibraryLocations) {

  });



// Controller that lists all the Library location
  WakeLibraryApp.controller('LocationsCtrl', function($scope, $http, LibraryLocations) {

    $scope.location = {
      name: ''
    }

    $scope.searchLocations = function() {

      LibraryLocations.list($scope.location.name, function(locations) {
        $scope.locations = locations;
      });

    };

    $scope.searchLocations();

  });



// Controller that for a single Library location
  WakeLibraryApp.controller('LocationCtrl', function($scope, $http, $stateParams, LibraryLocations) {
    LibraryLocations.find($stateParams.locationId, function(location) {
      $scope.location = location;

      console.log("Location page");
/*
      var field = document.getElementById("LocationsIframe");
      var fieldvalue = field.getAttribute("ng-name");
      console.log("tag is:" + field);
      console.log("attribute is:" + fieldvalue)


      fixIframeThingInLocation();

      function fixIframeThingInLocation() {
        // body...

        // The iframe is...
        var _locationIframe = document.getElementById("locationiframe");

        console.log(_locationIframe)

        // Thie iframe's data-iframeURL value is...
        var _locationIframeTrueSource = _locationIframe.getAttribute("ng-data");

        console.log(_locationIframeTrueSource)

        // So now we set the src of the iframe to...
        document.getElementById(_locationIframe).setAttribute("src", _locationIframeTrueSource);
      }
*/

    });
  });


// Twitter Controller
WakeLibraryApp.controller('TwitterCtrl', function($scope, $stateParams) {
  // Twitter widget JS
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
})

// Events tabs controllers
/*
WakeLibraryApp.controller('EventsTabsCtrl', [ '$scope', '$state', function($scope, $state) {
      //  $scope.navTitle = 'Tab Page';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }]
      }]);
*/


// Events Calendar Controller
WakeLibraryApp.controller('EventsCtrl', function($scope, $stateParams, DataSource) {

      SOURCE_FILE = "http://www.trumba.com/calendars/WCPL.rss?filterview=Teen+Events&HTML=0&previousweeks=0&weeks=6";

      $scope.IMAGE_LOCATION = "http://rabidgadfly.com/assets/angular/xmlload/";

      xmlTransform = function(data) {
          console.log("transform data");
          console.log(data);

          console.log(JSON.stringify(data));
          var x2js = new X2JS();
          var json = x2js.xml_str2json( data );
          // return json.guitars.guitar;
          return json.rss.channel.item;
          console.log(json.rss.channel.item);
      };

      setData = function(data) {
          $scope.dataSet = data;
          console.log($scope.dataSet.length);
          console.log($scope.dataSet);
      };

      DataSource.get(SOURCE_FILE,setData,xmlTransform);


})


WakeLibraryApp.controller('EventCtrl', function($scope, $stateParams, DataSource) {
  DataSource.find($stateParams.eventId, function(data) {
    $scope.dataSet = data;
    console.log(data);
    console.log("Event page");
  })
})

/*
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,  $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

/*
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
*/

/*
// Ths is the single locaion Controller, using the Locaitons Factory
.controller("LocationCtrl", function($scope, $stateParams, locationsFactory){
    locationsFactory.getLocation().then(function(response){
        $scope.locations = response.data.features;
      //  console.log(JSON.stringify($scope.locations));
    });
})

// Ths is the new Locations Controller, using the Locaitons Factory
.controller("LocationsCtrl", function($scope, locationsFactory){
    locationsFactory.getLocation().then(function(response){
        $scope.locations = response.data.features;
    //    console.log(JSON.stringify($scope.locations));

    });
});

*/


/* Version 2 - Listing is right, view is receiving correctly from stateparams
.controller('LocationsCtrl', function ($scope, $http, $stateParams){
      $http.get(LocationsUrl).success(function(data) {
            $scope.locations = data.features;
            //console.log(JSON.stringify($scope.locations));
          });
    })
.controller('LocationCtrl', function ($scope, $http, $stateParams){

  $http.get(LocationsUrl).success(function(data) {
        $scope.NAME = $stateParams.NAME;

        $scope.location = $stateParams.locationId;

        console.log(JSON.stringify($scope.location));
        console.log(JSON.stringify($stateParams.locationId));
        console.log(JSON.stringify(location));
        console.log(JSON.stringify($scope.NAME));
      });

});

.controller('LocationsCtrl', function($scope, $http, LibraryLocations) {
    LibraryLocations.list($scope.locations, function(data) {
      $scope.locations = data;
      $scope.locationId = data.locationId;
  //    console.log(JSON.stringify(data));

    });

})
.controller('LocationCtrl', function($scope, $http, $stateParams, LibraryLocations) {
  LibraryLocations.find($stateParams.locationId, function(data) {
    $scope.location = location;
    console.log(JSON.stringify(data));
  });
});
*/
