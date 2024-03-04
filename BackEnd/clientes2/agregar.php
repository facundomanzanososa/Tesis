<?php

// Desarrollado por Paulo Contrera - www.paulo-contrera.com para SygSeguros

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-API-KEY, Origin,  Content-Type, Accept, Access-Control-Request-Method');

require_once '../models/Cliente2.php';

$datos = json_decode(file_get_contents('php://input'));

if ($datos !== null) {
    
    $result = Cliente::insert(
        $datos->SKU, 
        $datos->RFID,
    );
} else {
    $result = false;
}

echo json_encode(['insert' => $result]);
