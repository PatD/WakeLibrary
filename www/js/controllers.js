WakeLibraryApp.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
/*
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

  */
});





// Controller that loads the Ask WCPL screen
  WakeLibraryApp.controller('AskwcplCtrl', function($scope, $stateParams, AskWCPLfactory) {

    $scope.answer = {
      name: ''
    }

    $scope.searchAnswers = function() {


      AskWCPLfactory.list($scope.answer.name, function(answers) {
        $scope.answers = answers;


      });
    };

    $scope.searchAnswers();

  });




// Google book search
  WakeLibraryApp.controller('BookSearchCtrl', function($scope, $stateParams, $ionicModal) {


    /* Google CSE */
    (function() {
      var cx = '001729500003019595200:fp9zpyuqyes';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
          '//cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();




  // Form data for the login modal
  // $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/booksearch/search.html', {
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



}); // End book search controller







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

    });
  });




// Twitter Controller
  WakeLibraryApp.controller('TwitterCtrl', function($scope, $stateParams) {
    // Twitter widget JS
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
  });




// Facebook Controller
  WakeLibraryApp.controller('FacebookCtrl', function($scope, $stateParams) {
    // Facebook widget JS
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=281211761941863";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });



// Events Landing Page Controller
  WakeLibraryApp.controller('EventsLandingCtrl', function($scope, EventsFactory, $stateParams) {
    console.log("Events Landing Page");
  });


/*
// Event Controller
WakeLibraryApp.controller('EventCtrl', function($scope, EventsFactory, $stateParams) {


  console.log($stateParams);
    console.log($stateParams.eventId);


//  EventsFactory.find($stateParams.eventId, function(event) {
  //  $scope.event = event.rss.channel.item.uid.__text;

//  });
});
*/




// Eventst Ctrl
WakeLibraryApp.controller('EventsAdultCtrl',function($scope, EventsFactory){
  var _EventsCacheData;

          $scope.events = [];
          loadEvents();

          function loadEvents(){
            EventsFactory.getEvents().success(function(data){
                event = x2js.xml_str2json(data);
              /*  console.log(courses.books.course);
                $scope.events = courses.books.course;



            */
            $scope.events = event.rss.channel.item;

            $stateParams = event.rss.channel.$$hashKey;
          //  _EventsCacheData = event.rss.channel.$$hashKey;
          //  console.log($stateParams)
          //  console.log(_EventsCacheData);

// console.log(event)

// console.log($scope.events);
// console.log(JSON.stringify($scope.events));
            });
            }
    
        });





// Eventst Ctrl
WakeLibraryApp.controller('EventsCtrl',function($scope, EventsFactory){
  var _EventsCacheData;

          $scope.events = [];
          loadEvents();

          function loadEvents(){
            EventsFactory.getEvents().success(function(data){
                event = x2js.xml_str2json(data);
              /*  console.log(courses.books.course);
                $scope.events = courses.books.course;



            */
            $scope.events = event.rss.channel.item;

            $stateParams = event.rss.channel.$$hashKey;
          //  _EventsCacheData = event.rss.channel.$$hashKey;
            console.log($stateParams)
          //  console.log(_EventsCacheData);




//console.log(event)

// console.log($scope.events);
// console.log(JSON.stringify($scope.events));
            });
            }
        });
