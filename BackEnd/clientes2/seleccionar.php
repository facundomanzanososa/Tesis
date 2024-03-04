<?php

// Desarrollado por Paulo Contrera - www.paulo-contrera.com para SygSeguros

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin,  Content-Type, Accept, Access-Control-Request-Method");

    require_once "../models/Cliente2.php";


    echo json_encode(Cliente::getAll());

?>