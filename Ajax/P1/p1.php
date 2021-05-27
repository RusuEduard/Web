<?php

$action = $_POST['action'];

switch($action){
  case 'get_plecari':
    get_plecari();
    break;

  case 'get_sosiri':
    get_sosiri();
    break;
}

function get_sosiri(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "trenuri";
  $plecare = $_POST['oras'];
  $conn = mysqli_connect($servername, $username, $password, $database);

  $query_sosiri = "select oras2 from orase where oras1='$plecare'";

  $sosiri = $conn->query($query_sosiri);

  if($sosiri->num_rows > 0){
    while($row = $sosiri->fetch_assoc()){
      echo $row["oras2"] . ",";
    }
  }
  else{
    echo "0 results";
  }
}

function get_plecari(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "trenuri";
  
  $conn = mysqli_connect($servername, $username, $password, $database);

  $query_plecari = "Select distinct oras1 from orase";
  $plecari = $conn->query($query_plecari);

  if($plecari->num_rows > 0){
    while($row = $plecari->fetch_assoc()){
      echo $row["oras1"] . ",";
    }
  }
  else{
    echo "0 results";
  }
}
?>