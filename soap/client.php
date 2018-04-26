<?php

    class client
    {
      public function __construct()
      {
        // Location is the SOAP server
        // URI is the namespace of the SOAP server
        $options = array('location' => 'http://localhost:8080/soap/server.php',
                        'uri' => 'http://localhost:8080/soap/server.php',
                        'trace' => 1);
        /*$options = array('location' => 'https://37812a33.ngrok.io/ping.svc',
                        'uri' => 'http://tempuri.org/',
                        'trace' => 1);*/ 
        
        $this->instance = new SoapClient(NULL, $options);
      } 
      
      public function getName($data)
      {
        return $this->instance->__soapCall('getReverseName', $data);
        // return $this->instance->__soapCall('', $data);
      }
    }

    $client = new client;
?>