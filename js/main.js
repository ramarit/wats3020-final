
$(document).ready(function() {
  var map = L.map('map-container').setView([47.66, -122.3321], 12);

  /*var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});*/

  var satLayer = L.tileLayer( 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFtYXJpdCIsImEiOiJjaXlrdHJ5OW0wMDFmMzJuejk1cG5xazF6In0.4GIhbUZGx1NrsXtfT-Xwag', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'ramarit.2pl5043m',
    accessToken: 'pk.eyJ1IjoicmFtYXJpdCIsImEiOiJjaXlrdHJ5OW0wMDFmMzJuejk1cG5xazF6In0.4GIhbUZGx1NrsXtfT-Xwag'
  });

  var drawLayer = L.tileLayer( 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFtYXJpdCIsImEiOiJjaXlrdHJ5OW0wMDFmMzJuejk1cG5xazF6In0.4GIhbUZGx1NrsXtfT-Xwag', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'ramarit.ciykvm14q00242qs72519mwbm-89orc',
    accessToken: 'pk.eyJ1IjoicmFtYXJpdCIsImEiOiJjaXlrdHJ5OW0wMDFmMzJuejk1cG5xazF6In0.4GIhbUZGx1NrsXtfT-Xwag'
  });

  /*var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
  });*/



  var mapLayers = {
    "Map View": drawLayer,
  }


  L.control.layers(mapLayers).addTo(map);
  satLayer.addTo(map);

});