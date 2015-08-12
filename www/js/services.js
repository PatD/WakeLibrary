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


WakeLibraryApp.factory('EventsFactory',function($http){
    var events = [];

    events.getEvents = function(){
      return $http.get("http://www.trumba.com/calendars/WCPL.rss?filterview=Teen+Events&HTML=0&previousweeks=0&weeks=6");
    }
  //  console.log(events);
      return events;
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
