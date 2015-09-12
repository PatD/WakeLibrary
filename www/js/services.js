// Ask WCPL
WakeLibraryApp.factory('AskServiceFactory', function($http) {
  var cachedData;

  function getData(moviename, callback) {

    var url = 'http://askwcpl.wakegov.com/api_answers.php?iid=294&limit=1000&showans=1&showdet=0&format=json';

    $http.get(url).success(function(data) {

      cachedData = data.answers;
      callback(data.answers);
    //  console.log(data.answers);
    });
  }

  return {
    list: getData,
    find: function(name, callback) {
    //  console.log(name);
      var answer = cachedData.filter(function(entry) {
        return entry.id == name;
      })[0];
      callback(answer);
    }
  };
});





// Locations
  WakeLibraryApp.factory('LibraryLocations', function($http) {
    var _LocationcachedData;

    function getData(locationname, callback) {
      var LocationsUrl = 'http://maps.wakegov.com/arcgis/rest/services/WCPL/Libraries/FeatureServer/0/query?where=+&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=NAME&groupByFieldsForStatistics=CITY&outStatistics=&returnZ=false&returnM=false&f=pjson';

      $http.get(LocationsUrl).success(function(data) {

        _LocationcachedData = data.features;
        callback(data.features);
        // Factory has successfully queried data
        // console.log(JSON.stringify(_LocationcachedData));

      });
    }

    return {
      list: getData,
      find: function(name, callback) {
        // console.log("name" + name);
        var location = _LocationcachedData.filter(function(entry) {
          return entry.attributes.OBJECTID == name;
        })[0];
        callback(location);
      }
    };

  });



// Events Adults
  WakeLibraryApp.factory('EventsFactoryAdults',function($http){
      var events = [];

      var currentEventId;


      events.getEvents = function(){
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?filterview=Adults+Only&HTML=1&previousweeks=0");

      }

      function setEventID(eventId){
        currentEventId = eventId;
      }

    //  console.log(events);
        return events;
        return currentEventId;
    });



// Events Teens Factory
  WakeLibraryApp.factory('EventsTeensFactory',function($http){
      var events = [];

      var currentEventId;


      events.getEvents = function(){
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?filterview=Teen+Events&HTML=1&previousweeks=0&weeks=6");

      }

      function setEventID(eventId){
        currentEventId = eventId;
      }

        return events;
        return currentEventId;
    });




// Events Kids Factory
  WakeLibraryApp.factory('EventsKidsFactory',function($http){
      var events = [];

      var currentEventId;


      events.getEvents = function(){
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?filterview=YS_only&HTML=1&previousweeks=0");

      }

      function setEventID(eventId){
        currentEventId = eventId;
      }

        return events;
        return currentEventId;
    });



// Events All Factory
  WakeLibraryApp.factory('EventsAllFactory',function($http){
      var events = [];

      var currentEventId;


      events.getEvents = function(){
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?HTML=1&previousweeks=0&weeks=10");

      }

      function setEventID(eventId){
        currentEventId = eventId;
      }

        return events;
        return currentEventId;
    });







/*
WakeLibraryApp.factory('DataSource', ['$http',function($http){
      var _libraryEventsCache;
      var eventsdata;
      return {
          get: function(file,callback,transform){
               $http.get(
                   file,
                   {transformResponse:transform}
               ).
               success(function(data, status) {
                // console.log("Request succeeded");
                //  console.log(data);
                _libraryEventsCache = data;
                   callback(data);
                   console.log(_libraryEventsCache)
               }).
               error(function(eventdata, status) {
                   console.log("Request failed " + status);
               });
          }
      };
  }]);
*/
