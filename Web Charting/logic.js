
var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var link2 = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json";
// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  let markers = [];
  console.log(data)
  for (var i = 0; i < data.features.length; i++) {
    let x = data.features[i].geometry.coordinates[0]
    let y = data.features[i].geometry.coordinates[1]
    let size = data.features[i].properties.mag
    let color = null;
    let fill = null;
    if (size < 1) {
      color = '#1BC04C';
      fill = '#1BC04C';
    } else if (size <= 2) {
      color ='FFFF33';
      fill = '#FFFF33';
     } else if (size <= 3) {
       color ='#FFFF00';
       fill = '#FFFF00';
     } else if (size <= 4) {
       color = '#FF7A04';
       fill = '#FF7A04';
     } else if (size <= 5) {
       color = '#F35C1B';
       fill = '#F35C1B';
     } else if (size >= 5) {
       color = '#FF0000';
       fill = '#FF0000';
     }

    let marker = L.circleMarker([y, x], {radius : size*1.5, color : color, fillColor : fill, fillOpacity: 0.9})
    markers.push(marker)
  };
  d3.json(link2, function(response) {


var dataLayer = L.geoJson(response)
var markerLayer = L.featureGroup(markers)
var overlayMaps = {
  "Tectonic Plates": dataLayer,
  "Earthquakes": markerLayer
};

let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
let accessToken = 'pk.eyJ1IjoiYmFuc3BhdWdoIiwiYSI6ImNqZng1MzY3cDAzZWkycW55OXQ1eDB6eWgifQ.Zd-GC8tP8VPaY__7iEUXWQ';
let myLayer = L.tileLayer(mapboxUrl, {id: 'mapbox.streets-satellite', maxZoom: 20, accessToken: accessToken});
let light = L.tileLayer(mapboxUrl, {id: 'mapbox.streets', maxZoom: 20, accessToken: accessToken});
let dark = L.tileLayer(mapboxUrl, {id: 'mapbox.dark', maxZoom: 20, accessToken: accessToken});

var baseMaps = {
  "Street": myLayer
  ,
  "Light": light,
  "Dark": dark
};

var map = L.map("map", {
  center: [50.5, -100],
  zoom: 3,
  layers: [myLayer
    , light, dark]
});

L.control.layers(baseMaps,overlayMaps).addTo(map);

var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
    limits = [1,2,3,4,5,6],
    labels = ['0-1','1-2','2-3','3-4','4-5', '5+']
    var colors = ['green','#FFFF33','yellow','orange','#FF7A04','red'];
    div.innerHTML = '<div class="labels"><div class="min">' + limits[0] + '</div> \
    <div class="max">' + limits[limits.length - 1] + '</div></div>'
  
  limits.forEach(function (limit, index) {
    labels.push('<li style="background-color: ' + colors[index] + '">' + labels[index] +'</li>')
  })
  
  div.innerHTML += '<ul>' + labels.join('') + '</ul>'
    return div
  }
  legend.addTo(map)
})
  });



