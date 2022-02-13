mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFuZ29nb2kiLCJhIjoiY2t6am95bm42MG5nNzJ1bGw3cnY0b3g0cyJ9.hzWoULXbbjFmxwbmmstHWA';


var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});



// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//   enableHighAccuracy:true
// })
// function successLocation(position){
//   console.log(position);
// }
// function errorLocation(){

// }

const geolocate= new mapboxgl.GeolocateControl(
  {
    positionOptions: { enableHighAccuracy: true }, 
    trackUserLocation: true,
    showUserHeading: true
  })
map.addControl(geolocate);

geolocate.on('geolocate', function(e) {
      var lon = e.coords.longitude;
      var lat = e.coords.latitude
      var position = [lon, lat];
      console.log(position);
});

   // When active the map will receive updates to the device's location as it changes.

   // Draw an arrow next to the location dot to indicate which direction the device is heading.
