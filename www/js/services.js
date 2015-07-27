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

/*


.factory('locationsFactory', function($http) {
  var cachedData;

  function getData(locationname, callback) {

    var LocationsUrl = 'http://maps.wakegov.com/arcgis/rest/services/WCPL/Libraries/FeatureServer/0/query?where=+&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=NAME&groupByFieldsForStatistics=CITY&outStatistics=&returnZ=false&returnM=false&f=pjson';

    $http.get(LocationsUrl).success(function(data) {

      console.log(JSON.stringify(data));

      cachedData = data.features;
      callback(data.features);
    });
  }

  return {
    list: getData,
    find: function(name, callback) {
      console.log(name);
      var locationname = cachedData.filter(function(entry) {
        return entry.features.attributes == location;
      })[0];
      callback(locationname);
    }
  };

})

;
*/
