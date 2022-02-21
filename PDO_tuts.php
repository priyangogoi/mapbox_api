<?php
//for fetching data 
try{

    $myPDO=new PDO("pgsql:host=ec2-52-73-149-159.compute-1.amazonaws.com; dbname=d5amlc2e2jbdhf;", "mdywqgrhlhywqn", "bec6970d84f2b5b172ddb8164b05f1310f6cc185278913745fe6befd0e2efc40");

    $sql= "SELECT * FROM users";
    foreach($myPDO->query($sql) as $row){
      echo "<br/>";
      print $row['userid'].'-'.$row['userphone'].'-'.$row['userpwd'];
    }

} catch(PDOException $e){

    echo $e->getMessage();
}

//for inserting values

try{

    $myPDO=new PDO("pgsql:host=ec2-52-73-149-159.compute-1.amazonaws.com; dbname=d5amlc2e2jbdhf;", "mdywqgrhlhywqn", "bec6970d84f2b5b172ddb8164b05f1310f6cc185278913745fe6befd0e2efc40");

    $sqlins= "INSERT INTO users(userid, userphone, userpwd) VALUES ('2', '876567432', '12adwdred')";
    $myPDO->query($sqlins);
    $sqlfetc="SELECT * FROM users";
    foreach($myPDO->query($sqlfetc) as $row){
      print "<br/>";
      print $row['userid'].'-'.$row['userphone'].'-'.$row['userpwd'].'<br/>';
    }

} catch(PDOException $e){

    echo $e->getMessage();
}

//for updating values
try{

    $myPDO=new PDO("pgsql:host=ec2-52-73-149-159.compute-1.amazonaws.com; dbname=d5amlc2e2jbdhf;", "mdywqgrhlhywqn", "bec6970d84f2b5b172ddb8164b05f1310f6cc185278913745fe6befd0e2efc40");

    
    $sql= "UPDATE users set userpwd='olamigo' where userid=2";
    $myPDO->query($sql);
    $sqlfetc="SELECT * FROM users";
    foreach($myPDO->query($sqlfetc) as $row){
      print "<br/>";
      print $row['userid'].'-'.$row['userphone'].'-'.$row['userpwd'].'<br/>';
    }

} catch(PDOException $e){

    echo $e->getMessage();
}
//delete values

try{

    $myPDO=new PDO("pgsql:host=ec2-52-73-149-159.compute-1.amazonaws.com; dbname=d5amlc2e2jbdhf;", "mdywqgrhlhywqn", "bec6970d84f2b5b172ddb8164b05f1310f6cc185278913745fe6befd0e2efc40");

    $sql= "DELETE from users where userid=2";
    $myPDO->query($sql);
    $sqlfetc="SELECT * FROM users";
    foreach($myPDO->query($sqlfetc) as $row){
      print "<br/>";
      print $row['userid'].'-'.$row['userphone'].'-'.$row['userpwd'].'<br/>';
    }

} catch(PDOException $e){

    echo $e->getMessage();
}


//for deleting values

try{

    $myPDO=new PDO("pgsql:host=ec2-52-73-149-159.compute-1.amazonaws.com; dbname=d5amlc2e2jbdhf;", "mdywqgrhlhywqn", "bec6970d84f2b5b172ddb8164b05f1310f6cc185278913745fe6befd0e2efc40");

    $sql= "DELETE from users where userid=2";
    $myPDO->query($sql);
    $sqlfetc="SELECT * FROM users";
    foreach($myPDO->query($sqlfetc) as $row){
      print "<br/>";
      print $row['userid'].'-'.$row['userphone'].'-'.$row['userpwd'].'<br/>';
    }

} catch(PDOException $e){

    echo $e->getMessage();
}