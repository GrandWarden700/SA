var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 23.858987, lng: 120.917631 },
  });

  map.data.loadGeoJson('taiwanCities.geojson.json');

  map.data.setStyle({
    strokeWeight: 1,
    strokeOpacity: 0.5,
    strokeColor: '#000',
    fillColor: '#f00',
    fillOpacity: 0.3,
  });

  map.data.addListener('mouseover', function (event) {
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, { fillColor: '#000' });
  });

  map.data.addListener('mouseout', function (event) {
    map.data.revertStyle();
  });
}
