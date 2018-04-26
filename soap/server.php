<?php
    class server
    {
      public function getReverseName($data)
      {
          return strrev($data);
      } 
    }

    $params = array('uri' => 'server.php');
    $server = new SoapServer(NULL, $params);
    $server->setClass('server');
    $server->handle();
?>