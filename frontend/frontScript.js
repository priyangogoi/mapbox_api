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
placeholder: 'Add pickup location'
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

geocoder.on('results', function(results){
    console.log(results.features[0]);
});

const geolocate=new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    fitBoundsOptions:{
        maxZoom:15
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true

    })
// Add geolocate control to the map.
map.addControl(geolocate);


function success(position){
    console.log(position)
    let lat=position.coords.latitude;
    let lon=position.coords.longitude;
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
   
  }
  function error(err){
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy:true
  });

for(let i=1;i<13;i++){
    document.getElementById("timepicker").innerHTML+=`<option value="${i}:00 AM">${i}:00 AM</option>`;
    document.getElementById("timepicker").innerHTML+=`<option value="${i}:00 PM">${i}:00 PM</option>`;
}