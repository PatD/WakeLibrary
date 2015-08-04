WakeLibraryApp.factory('LibraryLocations', function($http) {
  var cachedData;

  function getData(locationname, callback) {
    var LocationsUrl = 'http://maps.wakegov.com/arcgis/rest/services/WCPL/Libraries/FeatureServer/0/query?where=+&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=NAME&groupByFieldsForStatistics=CITY&outStatistics=&returnZ=false&returnM=false&f=pjson';

    $http.get(LocationsUrl).success(function(data) {

      cachedData = data.features;
      callback(data.features);
      // Factory has successfully queried data
      console.log(JSON.stringify(cachedData));

    });
  }

  return {
    list: getData,
    find: function(name, callback) {
      console.log("name" + name);
      var location = cachedData.filter(function(entry) {
        return entry.attributes.OBJECTID == name;
      })[0];
      callback(location);
    }
  };

});

/*
angular.module('starter.services', [])

// Factory that loads location data

.factory('locationsFactory', ['$http', function($http){

    function getData(locationname, callback) {

      var LocationsUrl = 'http://maps.wakegov.com/arcgis/rest/services/WCPL/Libraries/FeatureServer/0/query?where=+&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=NAME&groupByFieldsForStatistics=CITY&outStatistics=&returnZ=false&returnM=false&f=pjson';

      $http.get(LocationsUrl).success(function(data) {

        console.log(JSON.stringify(data));

        cachedData = data.features;
        callback(data.features);
      });
    }

    return {
        getLocation: function(){
          var locations = [];
            return $http.get("http://maps.wakegov.com/arcgis/rest/services/WCPL/Libraries/FeatureServer/0/query?where=+&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=NAME&groupByFieldsForStatistics=CITY&outStatistics=&returnZ=false&returnM=false&f=pjson");

        }
    }
}])

.factory('LibraryLocations', function($http) {
  var cachedData;

  function getData(locationname, callback) {

    $http.get(LocationsUrl).success(function(data) {

//      console.log(JSON.stringify(data));
  //    console.log(JSON.stringify(data.features));
    //  console.log(JSON.stringify(locationname));


      cachedData = data.features.attributes;
      callback(data.features);
//      console.log(data.features)

    });
  }

  return {

    list: getData,
    find: function(locationname, callback) {

      console.log(locationname);

      var locationname = cachedData.filter(function(entry) {
        return entry.location == name;
      })[0];

      callback(locationname);

  }
  };

});
*/
