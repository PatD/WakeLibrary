angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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



// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, $http, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $http, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
})



/*
.controller('LocationsCtrl', function($scope, $http, $stateParams) {
  $scope.locations= [];
  $http.get('http://maps.wakegov.com/arcgis/rest/services/WCPL/Libraries/FeatureServer/0/query?where=+&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=NAME&groupByFieldsForStatistics=CITY&outStatistics=&returnZ=false&returnM=false&f=pjson').success(function(data, status, headers, config) {

    console.log("success!");
    $scope.locations = data.features;
        console.log(data.features[0].attributes.NAME);
        console.log(data);
        console.log("Success " + status);
    }).
    error(function(data, status, headers, config) {
      console.log("Error" + status)
    });
})
*/



// This is the single location controller
/*
.controller('LocationCtrl', function($scope, $http, $stateParams, locationsFactory) {

})
*/

// Ths is the single locaion Controller, using the Locaitons Factory
.controller("LocationCtrl", function($scope, $stateParams, locationsFactory){
    locationsFactory.getLocation().then(function(response){
        $scope.locations = response.data.features;
    });
})

// Ths is the new Locations Controller, using the Locaitons Factory
.controller("LocationsCtrl", function($scope, locationsFactory){
    locationsFactory.getLocation().then(function(response){
        $scope.locations = response.data.features;
    });
});
