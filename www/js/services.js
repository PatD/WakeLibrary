WakeLibraryApp.factory('LibraryLocations', function($http) {
  var cachedData;

  function getData(locationname, callback) {
    var LocationsUrl = 'http://maps.wakegov.com/arcgis/rest/services/WCPL/Libraries/FeatureServer/0/query?where=+&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=NAME&groupByFieldsForStatistics=CITY&outStatistics=&returnZ=false&returnM=false&f=pjson';

    $http.get(LocationsUrl).success(function(data) {

      cachedData = data.features;
      callback(data.features);
      // Factory has successfully queried data
      // console.log(JSON.stringify(cachedData));

    });
  }

  return {
    list: getData,
    find: function(name, callback) {
      // console.log("name" + name);
      var location = cachedData.filter(function(entry) {
        return entry.attributes.OBJECTID == name;
      })[0];
      callback(location);
    }
  };

});



WakeLibraryApp.factory('DataSource', ['$http',function($http){
      return {
          get: function(file,callback,transform){
               $http.get(
                   file,
                   {transformResponse:transform}
               ).
               success(function(data, status) {
                   console.log("Request succeeded");
                   callback(data);
               }).
               error(function(data, status) {
                   console.log("Request failed " + status);
               });
          }
      };
  }]);
