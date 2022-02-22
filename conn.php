<?php

try{
    $phone=$_POST['phone'];
    $pwd=$_POST['pwd'];

$myPDO=new PDO("pgsql:host=ec2-52-73-149-159.compute-1.amazonaws.com; dbname=d5amlc2e2jbdhf;", "mdywqgrhlhywqn", "bec6970d84f2b5b172ddb8164b05f1310f6cc185278913745fe6befd0e2efc40");

$sqlins= "INSERT INTO users(userphone, userpwd) VALUES ('$phone', '$pwd')";
$myPDO->query($sqlins);
include("./frontend/home.php");
// $sqlfetc="SELECT * FROM users";
// foreach($myPDO->query($sqlfetc) as $row){
 
//   // print $row['userid'].'-'.$row['userphone'].'-'.$row['userpwd'].'<br/>';
//  
//   exit();
// }

} catch(PDOException $e){

echo $e->getMessage();
}
