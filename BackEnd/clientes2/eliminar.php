<?php

// Desarrollado por Paulo Contrera - www.paulo-contrera.com para SygSeguros

    header('Access-Control-Allow-Origin: http://localhost:4200');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin,  Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: DELETE");

    require_once "../models/Cliente2.php";

  
        if($resultado = Cliente::delete()) {
            echo json_encode(['delete' => TRUE]);
        }//end if
        else {
            echo json_encode(['delete' => FALSE]);
        }//end else
