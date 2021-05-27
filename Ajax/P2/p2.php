<?php

$action = $_POST['action'];

switch($action){
  case 'max_pages':
    get_max_pages();
    break;
  case 'get_page':
    get_page();
    break;
  default:
   echo 'option not avalable';
   break;
}

function get_page(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "trenuri";

  $page = $_POST['page'];
  if($page > 0){
    $page = $page * 3;
  }

  $conn = mysqli_connect($servername, $username, $password, $database);

  $cmd = "select * from persoane limit 3 offset $page";

  // echo $cmd;
  $rows = $conn->query($cmd);

  if($rows->num_rows > 0){
    while($row = $rows->fetch_assoc()){
      echo $row['nume'].','.$row['prenume'].','.$row['telefon'].','.$row['email'].';';
    }
  }
  else{
    echo "0 results";
  }
}

function get_max_pages(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "trenuri";

  $conn = mysqli_connect($servername, $username, $password, $database);

  $cmd = "select count(*) as count from persoane";

  $count = $conn->query($cmd);

  if($count->num_rows > 0){
    $row = $count->fetch_assoc();
    echo $row['count'];
  }
  else{
    echo '0 results';
  }
}

?>

