<?php
    
// Desarrollado por Paulo Contrera - www.paulo-contrera.com para SygSeguros
    
    $user = "admin";
    $pass = "admin@";
    $server = "localhost";
    $db ="nombre de la base de datos xD";

class Connection extends mysqli {
    function __construct() {
        global $server, $user, $pass, $db;
        parent::__construct($server, $user, $pass, $db);
        $this->set_charset('utf8');
        if($this->connect_errno) {
            die("Conexión fallida a la DB: " . $this->connect_error);
        }
    }
}