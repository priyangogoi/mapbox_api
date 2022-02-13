mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFuZ29nb2kiLCJhIjoiY2t6am95bm42MG5nNzJ1bGw3cnY0b3g0cyJ9.hzWoULXbbjFmxwbmmstHWA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy:true
})
function successLocation(position){
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation(){
 
}

  function setupMap(center){
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', 
      center:center
    });
  }


// const geolocate= new mapboxgl.GeolocateControl(
//   {
//     positionOptions: { enableHighAccuracy: true }, 
// When active the map will receive updates to the device's location as it changes.
//     trackUserLocation: true,
  // Draw an arrow next to the location dot to indicate which direction the device is heading.

//     showUserHeading: true
//   })
// map.addControl(geolocate);

// geolocate.on('geolocate', function(e) {
//       // var lon = e.coords.longitude;
//       // var lat = e.coords.latitude;
//       // var position = [lon, lat];
//       //console.log(position);
//       console.log(e)
// });

 

 