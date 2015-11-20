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

    // From Wake County GIS
   // var LocationsUrl = 'http://maps.wakegov.com/arcgis/rest/services/WCPL/Libraries/FeatureServer/0/query?where=+&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=NAME&groupByFieldsForStatistics=CITY&outStatistics=&returnZ=false&returnM=false&f=pjson';

   // New URL
   var LocationsUrl = 'http://maps.wakegov.com/arcgis/rest/services/WCPL/Libraries/MapServer/0/query?where=&text=&geometry=%7B%22xmin%22%3A-8940350.349409211%2C%22ymin%22%3A4224027.176468994%2C%22xmax%22%3A-8557247.963644091%2C%22ymax%22%3A4315751.610411161%2C%22spatialReference%22%3A%7B%22wkid%22%3A102100%7D%7D&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&f=pjson';

    // Local copy
  //  var LocationsUrl = 'js/sample-local-data/locations.json'



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





// Extra Locations
WakeLibraryApp.factory('SpecialLibraryLocations', function($http) {
  var _LocationcachedData;

  function getData(locationname, callback) {

   var LocationsUrl = 'http://maps.wakegov.com/arcgis/rest/services/WCPL/Libraries/MapServer/1/query?where=&text=&objectIds=&time=&geometry=%7B%22xmin%22%3A-8942643.460257765%2C%22ymin%22%3A4224027.176468994%2C%22xmax%22%3A-8554954.852795538%2C%22ymax%22%3A4315751.610411161%2C%22spatialReference%22%3A%7B%22wkid%22%3A102100%7D%7D&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson';


    $http.get(LocationsUrl).success(function(data) {

      _LocationcachedData = data.features;
      callback(data.features);

    });

  }

  return {
    list: getData,
    find: function(name, callback) {
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
/* Good, working
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fwww.wakegov.com%2Fnews%2F_layouts%2Flistfeed.aspx%3FList%3D%257B9478165C-B0D4-48D4-B6D9-B3EBA1007F6E%257D'&format=json&callback=";
*/


// Experimental. Just libraries. has sort-date
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fwww.wakegov.com%2Fnews%2F_layouts%2Flistfeed.aspx%3FList%3D%257B9478165C-B0D4-48D4-B6D9-B3EBA1007F6E%257D'%20AND%20category%20like%20'%25Libraries%25'%20%7C%20sort(field%3D%22pubDate%22%2Cdescending%3D%22true%22)&format=json&callback=";


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
        return $http.get('http://www.trumba.com/calendars/WCPL.rss?previousweeks=0&startdate='+todaysDate+'&days=1&HTML=0');
      }

      function setEventID(eventId){
        currentEventId = eventId;
      }

    //  console.log(events);
        return events;
        return currentEventId;
    });


// Events for tomorrow
  WakeLibraryApp.factory('EventsFactoryTomorrow',function($http){

// Usual Factory stuff starts here

      var events = [];

      var currentEventId;


      events.getEvents = function(){
        return $http.get('http://www.trumba.com/calendars/WCPL.rss?previousweeks=0&startdate='+tomorrowsDate+'&days=1&HTML=0');

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
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?filterview=Adults+Only&HTML=0&previousweeks=0&weeks=2&startdate="+todaysDate+"");

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
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?filterview=Teen+Events&HTML=0&previousweeks=0&weeks=2&startdate="+todaysDate+"");

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
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?filterview=YS_only&HTML=0&previousweeks=0&weeks=2&startdate="+todaysDate+"");

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
        return $http.get("http://www.trumba.com/calendars/WCPL.rss?HTML=0&previousweeks=0&weeks=2");

      }

      function setEventID(eventId){
        currentEventId = eventId;
      }

        return events;
        return currentEventId;
    });












/*

    // Events Filter
      WakeLibraryApp.factory('EventsFactoryFilter',function($http){


      // Highly unlikely search term
        var EventFactoryFilterSearchString = 'AndroidApp'

    // Usual Factory stuff starts here


          var events = [];

          var currentEventId;


          events.getEvents = function(){
        //    return $http.get('http://www.trumba.com/calendars/WCPL.rss?previousweeks=0&startdate='+todaysDate+'&days=1');

            return $http.get('http://www.trumba.com/calendars/WCPL.rss?HTML=0&search='+EventFactoryFilterSearchString+'&previousweeks=0&startdate='+todaysDate+'&weeks=4');

          }

          function setEventID(eventId){
            currentEventId = eventId;
          }

        //  console.log(events);
            return events;
            return currentEventId;
        });
*/
