
$(document).ready(function() {
  var map = L.map('map-container').setView([47.6062, -122.3321], 10);

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

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
  });
    /* smooth scroll */
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top -45
        }, 1000, function(){
   
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });






});