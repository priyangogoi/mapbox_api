// mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFuZ29nb2kiLCJhIjoiY2t6am95bm42MG5nNzJ1bGw3cnY0b3g0cyJ9.hzWoULXbbjFmxwbmmstHWA';

// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11', 
//   center:[95.35680033297228, 27.488665589483862],
//   zoom:14
// });

//   // function success(position){
//   //   console.log(position);
//   // }
//   // function error(err){
//   //   console.warn(`ERROR(${err.code}): ${err.message}`);
//   // }

//   // navigator.geolocation.getCurrentPosition(success, error, {
//   //   enableHighAccuracy:true
//   // });



//     // Add geolocate control to the map.
//   const geolocate=
//   new mapboxgl.GeolocateControl({
//   positionOptions: {
//   enableHighAccuracy: true
//   },
//   // When active the map will receive updates to the device's location as it changes.
//   trackUserLocation: true,
//   // Draw an arrow next to the location dot to indicate which direction the device is heading.
//   showUserHeading: true
//   });
//   //Adding geolocation control button
//   map.addControl(geolocate);
//   //Adding Zoom control button 
//   const nav=new mapboxgl.NavigationControl()
//   map.addControl(nav);

//   geolocate.on('geolocate', function(e) {
//       var lon = e.coords.longitude;
//       var lat = e.coords.latitude;
//       var position = [lon, lat];
//       if(position.length!=0){
//         setupMap(position);
//       }
//       else{
//         setupMap([95.37, 27.5])
//       }
// });

// function setupMap(center){
//     map = ({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11', 
//     center:center, 
//     zoom:15
//   });

//     var directions = new MapboxDirections({
//       accessToken: 'mapboxgl.accessToken',
//     });
    
//     map.addControl(directions, 'top-left');    
//   }

  
// // const geolocate= new mapboxgl.GeolocateControl(
// //   {
// //     positionOptions: { enableHighAccuracy: true }, 
// // When active the map will receive updates to the device's location as it changes.
// //     trackUserLocation: true,
//   // Draw an arrow next to the location dot to indicate which direction the device is heading.

// //     showUserHeading: true
// //   })
// // map.addControl(geolocate);

// // geolocate.on('geolocate', function(e) {
// //       // var lon = e.coords.longitude;
// //       // var lat = e.coords.latitude;
// //       // var position = [lon, lat];
// //       //console.log(position);
// //       console.log(e)
// // });


// document.getElementById("signup").addEventListener("submit", (e)=>{
//   e.preventDefault();
//   const phone=document.getElementById("phone").value;
//   const pwd= document.getElementById("pwd").value;
//   let stmt="phone="+phone+"pwd="+pwd;
//   let xhr=new XMLHttpRequest();
//   xhr.open("POST", "conn.php", true);
//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhr.onload=function(){
//     console.log(this.responseText);
// }

// xhr.send(stmt);

// })
 

document.getElementById("signupform").addEventListener("submit", (e)=>{
  e.preventDefault();
  const phone=document.getElementById("signupPhone").value;
  const pwd=document.getElementById("signupPwd").value;
  let stmt="phone="+phone+"&pwd="+pwd;
  let xhr=new XMLHttpRequest();
  xhr.open("POST", "conn.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload=function(){
    console.log(this.responseText);
  }

  xhr.send(stmt);
})