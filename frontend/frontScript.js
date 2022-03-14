mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFuZ29nb2kiLCJhIjoiY2t6am95bm42MG5nNzJ1bGw3cnY0b3g0cyJ9.hzWoULXbbjFmxwbmmstHWA';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [95.35680033297228, 27.488665589483862],
zoom: 13
});
 
// Add the control to the map.
const geocoder = new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl,
placeholder: 'Add pickup location',
zoom:15
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

geocoder.on('results', function(results){
    console.log(results.features[0]);
});

// map.addControl(
//   new mapboxgl.GeolocateControl({
//   positionOptions: {
//   enableHighAccuracy: true
//   },
//   // When active the map will receive updates to the device's location as it changes.
//   trackUserLocation: true,
//   // Draw an arrow next to the location dot to indicate which direction the device is heading.
//   showUserHeading: true
//   })
//   );
 function reverseGeo(long,lat){
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=pk.eyJ1IjoicHJpeWFuZ29nb2kiLCJhIjoiY2t6am95bm42MG5nNzJ1bGw3cnY0b3g0cyJ9.hzWoULXbbjFmxwbmmstHWA`)
    .then(res=>res.json())
    .then(data=>console.log(data.features[0]));
 }

function success(position){
    
    let lat=position.coords.latitude;
    let lon=position.coords.longitude;
    console.log(lat,lon);
    
    map.flyTo({
        center:[lon, lat],
        zoom: 15,
        bearing: 0,
         
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 1.5, // make the flying slow
        curve: 1, // change the speed at which it zooms out
         
        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: (t) => t,
         
        // this animation is considered essential with respect to prefers-reduced-motion
        essential: true
    })
    const marker = new mapboxgl.Marker()
    .setLngLat([lon,lat])
    .addTo(map);
   
  }
  function error(err){
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: false, timeout: 5000
  });
  
for(let i=1;i<13;i++){
    document.getElementById("timepicker").innerHTML+=`<option value="${i}:00 AM">${i}:00 AM</option>`;
    document.getElementById("timepicker").innerHTML+=`<option value="${i}:00 PM">${i}:00 PM</option>`;
}   