<?php
$action = $_POST['action'];

switch($action){
  case 'get_ids':
    get_ids();
    break;
  case 'get_nume':
    get_nume();
    break;
  case 'save':
    save();
    break;
  default:
    echo 'Nu exista aceasta operatie';
    break;
}

function save(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "trenuri";
  $nume = $_POST['nume'];
  $id = $_POST['id'];

  $conn = mysqli_connect($servername, $username, $password, $database);

  $cmd = "update names set nume = '$nume' where id = $id";
  
  $conn->query($cmd);
}

function get_nume(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "trenuri";
  $id = $_POST['id'];

  $conn = mysqli_connect($servername, $username, $password, $database);

  $cmd = "select nume from names where id = $id";

  $res = $conn->query($cmd);
  if($res->num_rows > 0){
    while($row = $res->fetch_assoc()){
      echo $row['nume'];
    }
  }
  else{
    echo '0 results';
  }
}

function get_ids(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "trenuri";

  $conn = mysqli_connect($servername, $username, $password, $database);

  $cmd = "select id from names";

  $ids = $conn->query($cmd);

  if($ids->num_rows > 0){
    while($row = $ids->fetch_assoc()){
      echo $row['id'].',';
    }
  }
  else{
    echo '0 results';
  }
}

?>