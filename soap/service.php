<?php 
    include 'http://localhost:8080/soap/client.php';

    $data = array('name' => 'Miguel');
    // $data = array('str' => 'Miguel');
    echo $client->getName($data);
?>