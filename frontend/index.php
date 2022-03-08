<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Mapbox</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
<link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>
<style>
body { margin: 0; padding: 0; }
#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>
</head>
<body>
<script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.min.js"></script>
<link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" type="text/css">

<link rel="stylesheet" href="style.css">
 
<div id="map"></div>
 
<div id="geocoder" class="geocoder"></div>

<div class="date&time">
    <!-- date picker -->
    <h4></h4><input type="date" name="date" id="datepicker">
    <!-- time picker -->
    <select name="time" id="timepicker" class="timepicker">
    </select>
</div>

<div class="form-bt">
    <form action="" method="post">
      <button type="submit" value="submit" class="btn" id="">Next<br>(2 clicks away)</button>
</form>
</div> 
<script src="./frontScript.js" ></script>
</body>
</html>