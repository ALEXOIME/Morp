<?php 

    $host = 'localhost';
    $dbname = 'morp_database';
    $users = 'root';
    $pass = '';

    $cnct = new PDO("mysql:host=$host; dbname=$dbname", $users, $pass);
    
    if($cnct){

        $createTB = "CREATE TABLE IF NOT EXISTS client (id SERIAL, username VARCHAR(255), score INT, classement INT, conct INT)";

        $exct = $cnct->query($createTB);

    }

?>