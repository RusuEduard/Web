<?php
$mat = $_POST['mat'];
$y = -1;
$x = -1;
if(validate($mat, 'x') == 'VICTORY'){
  echo('VICTORY');
}
else{
  for($row = 0; $row < 3; $row++){
    $ok = 0;
    for($col = 0; $col < 3; $col++)
      if($mat[$row][$col] == '-1'){
        $mat[$row][$col] = '0';
        $y = $row;
        $x = $col;
        $ok = 1;
        break;
      }
    if($ok == 1){
      break;
    }
  }

  if(validate($mat, '0') == 'VICTORY'){
    echo($y.','.$x.','.'DEFEAT');
  }
  else{
    echo($y.','.$x.',');
  }
}

function validate($mat, $char){
  $victory = 0;
  $defeat = 0;

  for($row = 0; $row < 3; $row++){
    $win =  1;
    for($col = 0; $col < 3; $col++){
      if($mat[$row][$col] != $char){
        $win = 0;
        break;
      }
    }
    if($win == 1){
      $victory = 1;
      break;
    }
  }

  for($col = 0; $col < 3; $col++){
    $win = 1;
    for($row = 0; $row < 3; $row++){
      if($mat[$row][$col] != $char){
        $win = 0;
        break;
      }
    }
    if($win == 1){
      $victory = 1;
      break;
    }
  }

  if($mat[0][0] == $mat[1][1] and $mat[1][1] == $mat[2][2] and $mat[2][2] == $char)
    $victory = 1;

  if($mat[0][2] == $mat[1][1] and $mat[1][1] == $mat[2][0] and $mat[1][1] == $char)
    $victory = 1;

  if($victory == 1){
    return 'VICTORY';
  }
  else
    return 'KEEP TRYING';
}

?>