
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js"></script>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css" type="text/css">
    <script src="https://kit.fontawesome.com/26eb5e7fbc.js" crossorigin="anonymous"></script>
    <script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.min.js'></script>
    <link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.css' type='text/css' />

   <style>  
      body{
        margin:0;
      } 
     #map{
          height: 50vh;
          width: 100vw;
        }
        .pckuploc{
            position: relative;
        }
        .pckuploc i{
            position: absolute;
        }
    </style>
   
     <script src="../frontend/frontScript.js" defer></script>
     
</head>
<body>
<div id='map'></div>
<div class="pckuploc">
<input type="text" placeholder="Enter pickup location" id="pickUpBox">
<a href="#" class="" id="locateMeBtn"><i class="fas fa-solid fa-location-arrow"></i></a> 
</div>



</body>
</html>

