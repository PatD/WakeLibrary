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


// Controller that shows slider on home screen. Same as locations:


// Homescreen: Controller that lists all the Library locations.  This powers the slider
  WakeLibraryApp.controller('HomeSlideImagesCtrl', function($scope) {

    $scope.library3letterlocs = [
      { loc: 'wrl' },
      { loc: 'orl', name:'Olivia Raney Local History Library'},
      { loc: 'nor' },
      { loc: 'erl' },
      { loc: 'cry' },
      { loc: 'dur' },
      { loc: 'elf', name: 'Express Library Raleigh' },
      { loc: 'cam' },
      { loc: 'eva' },
      { loc: 'fuq' },
      { loc: 'gre' },
      { loc: 'hsp' },
      { loc: 'lee' },
      { loc: 'rbh' },
      { loc: 'ser' },
      { loc: 'sga' },
      { loc: 'wak' },
      { loc: 'wen' },
      { loc: 'zeb'}
    ];


  });




// Homescreen: Controller that lists all the Library location
  WakeLibraryApp.controller('HomeSlideLocationsCtrl', function($scope, $http, LibraryLocations) {

    $scope.location = {
      name: ''
    }

      LibraryLocations.list($scope.location.name, function(locations) {
        $scope.locations = locations;

      });

  });






// FourSquare Controller to list phone number

  WakeLibraryApp.controller('FourSquareLocationContactsCtrl', function($scope, $http, $stateParams, $ionicLoading, FourSquareFactory){

    $scope.answer = {
      name: ''
    }

    $scope.doRefresh = function() {

       FourSquareFactory.list($scope.answer.name, function(answers) {
         $scope.answers = answers;
       });
         $scope.$broadcast('scroll.refreshComplete');

     };
     $scope.doRefresh();

  });






// Controller that lists the Ask WCPL screen
  WakeLibraryApp.controller('AskwcplListCtrl', function($scope, $http, AskServiceFactory){
    $scope.answer = {
      name: ''
    }

    AskServiceFactory.list($scope.answer.name, function(answers) {
      $scope.answers = answers;
    });

  });




// Detail View for AskWCPL
  WakeLibraryApp.controller("AskwcplDetailsCtrl", function($scope, $http, $stateParams, AskServiceFactory){

    function clickSetter(){
    document.onclick = function (e) {
         e = e ||  window.event;
         var element = e.target || e.srcElement;

         if (element.className == 'gs-title') {

             window.open(element.href, "_blank", "location=no");
             return false; // prevent default action and stop event propagation

             }
         };
    };

      AskServiceFactory.find($stateParams.answerid, function(answer) {
        $scope.answer = answer;
        clickSetter();
      });
  });


// Non-Google Book search

WakeLibraryApp.controller('BookSearchCatalogCtrl', function($scope, $ionicModal) {

$scope.bookSearchInput = {};

  $ionicModal.fromTemplateUrl('modal.html', function($ionicModal) {
          $scope.modal = $ionicModal;
      }, {
          // Use our scope for the scope of the modal to keep it simple
          scope: $scope,
          // The animation we want to use for the modal entrance
          animation: 'slide-in-up'
      });

/*
$scope.bookSearchInput = {};

  $scope.login = function() {
      console.log($scope.bookSearchInput.searchfield);

  };
*/



});






// Google book search
  WakeLibraryApp.controller('BookSearchCtrl', function($scope) {

    // This function inappbrowswer's the booksearch clicks
    document.onclick = function (e) {
         e = e ||  window.event;
         var element = e.target || e.srcElement;

         if (element.className == 'gs-title') {
    //     if (element.tagName == 'A') {
             window.open(element.href, "_blank", "location=no");
             return false; // prevent default action and stop event propagation
         }
     };




      ionic.Platform.ready(function(){
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

      });

}); // End book search controller









// Controller that lists all the SPECIAL Library location
/* Not needed.  Wakegov consolidated locations
  WakeLibraryApp.controller('SpecialLocationsCtrl', function($scope, $http, SpecialLibraryLocations) {

      $scope.location = {
        name: ''
      }

      SpecialLibraryLocations.list($scope.location.name, function(locations) {
        $scope.locations = locations;
      });

  });
*/





// Controller that lists all the REGULAR Library location
  WakeLibraryApp.controller('LocationsCtrl', function($scope, $http, LibraryLocations) {

    $scope.location = {
      name: ''
    }

    // Pull to refresh wrapper
    $scope.doRefresh = function() {

      LibraryLocations.list($scope.location.name, function(locations) {
        $scope.locations = locations;
      });

      $scope.$broadcast('scroll.refreshComplete');

     };
     $scope.doRefresh();

  });










// Controller that for a single SPECIAL Library location
/*
  WakeLibraryApp.controller('SpecialLocationCtrl', function($scope, $http, $stateParams, SpecialLibraryLocations) {

    // This function inappbrowswer's the map clicks
    document.onclick = function (e) {
         e = e ||  window.event;
         var element = e.target || e.srcElement;

         if (element.className == 'google-map button icon-left ion-android-map button-positive') {
    //     if (element.tagName == 'A') {
             window.open(element.href, "_blank", "location=no");
             return false; // prevent default action and stop event propagation
         }
     };

    // Routing stuff
    SpecialLibraryLocations.find($stateParams.locationId, function(location) {
      $scope.location = location;

    });


  });

*/


  // Controller that for a single Regular Library location
    WakeLibraryApp.controller('LocationCtrl', function($scope, $http, $stateParams, LibraryLocations) {

      // This function inappbrowswer's the map clicks
      document.onclick = function (e) {
           e = e ||  window.event;
           var element = e.target || e.srcElement;

           if (element.className == 'google-map button icon-left ion-android-map button-positive') {
      //     if (element.tagName == 'A') {
               window.open(element.href, "_blank", "location=no");
               return false; // prevent default action and stop event propagation
           }
       };

      // Routing stuff
      LibraryLocations.find($stateParams.locationId, function(location) {
        $scope.location = location;
  /*
        // Here we load Google Maps
        uiGmapGoogleMapApi.then(function(maps) {

          console.log(location.geometry.x);
            console.log(location.geometry.y);

          $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };


        }); // end of Google Maps
  */

      });


    });

















// Twitter Controller
  WakeLibraryApp.controller('TwitterCtrl', function($scope) {
    // Twitter widget JS
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
  });



// Facebook Controller
/*
  WakeLibraryApp.controller('FacebookCtrl', function($scope) {
    // Facebook widget JS
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=281211761941863";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });

*/






// Eventst Ctrl
WakeLibraryApp.controller('EventsAdultCtrl',function($scope, EventsFactoryAdults){
  var _EventsCacheData;
  $scope.events = [];
  loadEvents();

    function loadEvents(){
      EventsFactoryAdults.getEvents().success(function(data){
          event = x2js.xml_str2json(data);

      $scope.events = event.rss.channel.item;

      $stateParams = event.rss.channel.$$hashKey;
      _EventsCacheData = event.rss.channel.$$hashKey;
    //  console.log($stateParams)
  //    console.log(event);

    // console.log(event)

  //  console.log($scope.events);
  // console.log(JSON.stringify($scope.events));
      });
      }

  });






// Events Teens Ctrl
  WakeLibraryApp.controller('EventsTeensCtrl',function($scope, EventsTeensFactory){
    var _EventsCacheData;

          $scope.events = [];
          loadEvents();

          function loadEvents(){
            EventsTeensFactory.getEvents().success(function(data){
                event = x2js.xml_str2json(data);

            $scope.events = event.rss.channel.item;

            $stateParams = event.rss.channel.$$hashKey;

            });
            }

        });





// Events Kids Ctrl
  WakeLibraryApp.controller('EventsKidsCtrl',function($scope, EventsKidsFactory){
    var _EventsCacheData;

          $scope.events = [];
          loadEvents();

          function loadEvents(){
            EventsKidsFactory.getEvents().success(function(data){
                event = x2js.xml_str2json(data);

            $scope.events = event.rss.channel.item;

            $stateParams = event.rss.channel.$$hashKey;

            });
            }

        });





// Events All Ctrl
  WakeLibraryApp.controller('EventsAllCtrl',function($scope, EventsAllFactory){
    var _EventsCacheData;

          $scope.events = [];
          loadEvents();

          function loadEvents(){
            EventsAllFactory.getEvents().success(function(data){
                event = x2js.xml_str2json(data);

            $scope.events = event.rss.channel.item;

            $stateParams = event.rss.channel.$$hashKey;

            });
            }

        });




  // Events Today Ctrl
    WakeLibraryApp.controller('EventsTodayCtrl',function($scope, EventsFactoryToday){
      var _EventsCacheData;

          $scope.todaysDateShort = todaysDateShort;
          //console.log($scope.todaysDate);

            $scope.events = [];
            loadEvents();

            function loadEvents(){
              EventsFactoryToday.getEvents().success(function(data){
                  event = x2js.xml_str2json(data);

              $scope.events = event.rss.channel.item;

              $stateParams = event.rss.channel.$$hashKey;

              });
              }

          });



          // Events Tomorrow Ctrl
            WakeLibraryApp.controller('EventsTomorrowCtrl',function($scope, EventsFactoryTomorrow){
              var _EventsCacheData;
              $scope.tomorrowsDateShort = tomorrowsDateShort;

                //  $scope.todaysDate = todaysDate;
                  //console.log($scope.todaysDate);

                    $scope.events = [];
                    loadEvents();

                    function loadEvents(){
                      EventsFactoryTomorrow.getEvents().success(function(data){
                          event = x2js.xml_str2json(data);

                      $scope.events = event.rss.channel.item;

                      $stateParams = event.rss.channel.$$hashKey;

                      });
                      }

                  });

/*

          // Events Filter Ctrl
            WakeLibraryApp.controller('EventsFilterCtrl',function($scope, EventsFactoryFilter){
              var _EventsCacheData;

                    $scope.events = [];
                    loadEvents();

                    function loadEvents(){
                      EventsFactoryFilter.getEvents().success(function(data){
                          event = x2js.xml_str2json(data);

                      $scope.events = event.rss.channel.item;

                      $stateParams = event.rss.channel.$$hashKey;

                      });
                      }

                  });

*/

























  // News Listing Ctrl
    WakeLibraryApp.controller('NewsCtrl',function($scope, $http, NewsFactory){

      $scope.newsitem = {
        name: ''
      }

      // Pull to refresh wrapper
    //  $scope.doRefresh = function() {

        NewsFactory.list($scope.newsitem.name, function(news) {
          $scope.news = news;
           console.log(news);
        });

  //      $scope.$broadcast('scroll.refreshComplete');

  //     };
  //     $scope.doRefresh();

    });



    // News Detail Ctrl
      WakeLibraryApp.controller("NewsDetailCtrl", function($scope, $http, $stateParams, NewsFactory){
          NewsFactory.find($stateParams.title, function(newsitem) {
            $scope.newsitem = newsitem;
          });
      });
