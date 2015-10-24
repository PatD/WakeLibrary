// Foursquare Factory WCPL for contact screen
WakeLibraryApp.factory('FourSquareFactory', function($http) {

  var cachedData;

  function getData(moviename, callback) {

    var fourSquareBase = 'https://api.foursquare.com/v2/venues/search?limit=50&client_id=R4AMR23V3JWLXO3LIQILBZPZ1TNEWELPYSUK2YBEUBPL4OBU&client_secret=RUX5IIKBSU0K0MEKJYVOJNPSX3E1G4WGJCRGSVHQK02AAXRE';
    var fourSquareDate = todaysDate;
    var fourSquareLibLocation = 'Library';  // maybe scope.locationname
    var fourSquareLibCity = 'Wake County NC';             // maybe scope.city


    var url = fourSquareBase + '&v=' + fourSquareDate + '&query=' + fourSquareLibLocation + '&near=' + fourSquareLibCity;

    $http.get(url).success(function(data) {

      cachedData = data.response.venues;
      callback(data.response.venues);
    //  console.log(data.response.venues);

  ;
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















// Ask WCPL
WakeLibraryApp.factory('AskServiceFactory', function($http) {
  var cachedData;

  function getData(moviename, callback) {

//    var url = 'http://askwcpl.wakegov.com/api_answers.php?iid=294&limit=500&showans=1&showdet=0&format=json';
  // Changed this to sort by most popular at the top
    var url = 'http://askwcpl.wakegov.com/api_answers.php?iid=294&type=popular&limit=500&showans=1&showdet=0&format=json';

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






// Wake News
WakeLibraryApp.factory('NewsFactory',function($http){
  var newsData;

  function getData(moviename, callback) {

/*
Original:

select * from rss where url='http://www.wakegov.com/news/_layouts/listfeed.aspx?List=%7B9478165C-B0D4-48D4-B6D9-B3EBA1007F6E%7D'


New:
select * from rss where category like '%Libraries%' AND url='http://www.wakegov.com/news/_layouts/listfeed.aspx?List=%7B9478165C-B0D4-48D4-B6D9-B3EBA1007F6E%7D'
select * from rss where url='http://www.wakegov.com/news/_layouts/listfeed.aspx?List=%7B9478165C-B0D4-48D4-B6D9-B3EBA1007F6E%7D' AND category like '%Libraries%'



*/

    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fwww.wakegov.com%2Fnews%2F_layouts%2Flistfeed.aspx%3FList%3D%257B9478165C-B0D4-48D4-B6D9-B3EBA1007F6E%257D'&format=json&callback=";
  //  var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fwww.wakegov.com%2Fnews%2F_layouts%2Flistfeed.aspx%3FList%3D%257B9478165C-B0D4-48D4-B6D9-B3EBA1007F6E%257D'%20AND%20category%20like%20'%25Libraries%25'%20%0A&format=json&callback=";
    $http.get(url).success(function(data) {

      newsData = data.query.results.item;
      callback(data.query.results.item);
  //   console.log(data.query.results.item);
    });
  }

  return {
    list: getData,
    find: function(name, callback) {
    //  console.log(name);
      var newsitem = newsData.filter(function(entry) {
        return entry.title == name;
      })[0];
      callback(newsitem);
    }
  };
});








// Events Today
  WakeLibraryApp.factory('EventsFactoryToday',function($http){

// Usual Factory stuff starts here

      var events = [];

      var currentEventId;


      events.getEvents = function(){
        return $http.get('http://www.trumba.com/calendars/WCPL.rss?previousweeks=0&startdate='+todaysDate+'&days=1');

      }

      function setEventID(eventId){
        currentEventId = eventId;
      }

    //  console.log(events);
        return events;
        return currentEventId;
    });












// Events Adults
  WakeLibraryApp.factory('EventsFactoryAdults',function($http){
      var events = [];

      var currentEventId;


      events.getEvents = function(){
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?filterview=Adults+Only&HTML=1&previousweeks=0&weeks=2");

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
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?filterview=Teen+Events&HTML=1&previousweeks=0&weeks=2");

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
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?filterview=YS_only&HTML=1&previousweeks=0&weeks=2");

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
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?HTML=1&previousweeks=0&weeks=2");

      }

      function setEventID(eventId){
        currentEventId = eventId;
      }

        return events;
        return currentEventId;
    });
