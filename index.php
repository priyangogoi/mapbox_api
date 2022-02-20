<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapbox API</title>

</head>
<body>

<?php

try{

    $myPDO=new PDO("pgsql:host=ec2-52-73-149-159.compute-1.amazonaws.com; dbname=d5amlc2e2jbdhf;", "mdywqgrhlhywqn", "bec6970d84f2b5b172ddb8164b05f1310f6cc185278913745fe6befd0e2efc40");

    $sqlins= "INSERT INTO users(userphone, userpwd) VALUES ('876567432', '12adwdred')";
    $myPDO->query($sql);

    $sqlfetc="SELECT * FROM users";
    foreach($myPDO->query($sqlfetc) as $row){
      print "<br/>";
      print $row['userid'].'-'.$row['userphone'].'-'.$row['userpwd'].'<br/>';
    }

} catch(PDOException $e){

    echo $e->getMessage();
}

?>

</body>
</html>   
    <!-- <script src='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js"></script>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css" type="text/css">
     -->
<!--     
      /* body{
        margin:0;
      } */
        /* #map{
          height: 100vh;
          width: 100vw;
        } */
    /* -->
<!--     <script src="javascript/script.js" defer></script>

</head>
<body>

    <div id='map'></div>
    <form id="signup">
    <input type="tel" name="Phone" id="phone" placeholder="Phone No.">
    <input type="password" name="pwd" id="pwd" placeholder="Password">
    <input type="submit" value="submit">
    </form>
</body>
</html> 
 -->

