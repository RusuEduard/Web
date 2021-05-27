<?php
$dir = $_GET["dir"];

if (is_dir($dir)) {

    if ($handle = opendir($dir)) {

        while (false !== ($entry = readdir($handle))) {

            if ($entry != "." && $entry != "..") {

                echo "$entry,";
            }
        }

        closedir($handle);
    }
}else{
    echo "File,";
    $myfile = fopen($dir, "r") or die("Unable to open file!");
    echo fread($myfile,filesize($dir));
    fclose($myfile);
}

?>