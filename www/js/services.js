// Ask WCPL
/*
  WakeLibraryApp.factory('AskWCPLfactory', function($http) {
    var _AnswerCachedData;

    function getData(answername, callback) {
      var AnswersUrl = 'http://askwcpl.wakegov.com/api_answers.php?iid=294&type=popular&limit=30&showans=1&showdet=0&format=json';



      $http.get(AnswersUrl).success(function(data) {

        _AnswerCachedData = data.answers;
        callback(data.answers);
        // Factory has successfully queried data
        // console.log(JSON.stringify(_AnswerCachedData));

      });
    }

    return {
      list: getData,
      find: function(name, callback) {
        // console.log("name" + name);
        var answer = _AnswerCachedData.filter(function(entry) {
          return entry.answers.id == name;
        })[0];
        callback(answer);
      }
    };

  });
*/

  WakeLibraryApp.factory('AskService',['$http',function($http){
    console.log("Factory start");




    console.log("Factory end");

        /*
          var answers = []; //Private Variable
          return {

              // Suspect this is getting all the answers
              GetAnswers: function(){
                  return $http.get("http://askwcpl.wakegov.com/api_answers.php?iid=294&type=popular&limit=500&showans=1&showdet=1&format=json").then(function(response){
                      answers = response;
                      return response;
                  });
              },




              // Suspect this is an individual answer
              GetAnswer: function(answerId){
                console.log("start factory")
                  for(i=0;i < answers.length;i++){
                      if(answers[i].id == answerId){
                          return answers[i];

                      }

                  }
              }
          }

          */
      }]);

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
