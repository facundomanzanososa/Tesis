<?php

// Desarrollado por Paulo Contrera - www.paulo-contrera.com para SygSeguros

    require_once "../connection/Connection.php";

    class Cliente {

        public static function getAll() {
            $db = new Connection();
            $query = "SELECT * FROM `productos2` WHERE 1";
            $resultado = $db->query($query);
            $datos = [];
            if($resultado->num_rows) {
                while($row = $resultado->fetch_assoc()) {
                    $datos[] = $row;
                }
            }
            return $datos;
        }

        
        public static function insert($SKU, $RFID) {
            $db = new Connection();
            $Zona1=19;
            date_default_timezone_set('America/Buenos_Aires');
            $fecha = date("Y-m-d H:i:s");
            $query = "INSERT INTO productos2(SKU, RFID, HoraCreacion) VALUES (?,?,?)";
            $stmt = $db->prepare($query);
            $stmt->bind_param("sss",$SKU, $RFID, $fecha);
            $stmt->execute();
            return $stmt->affected_rows > 0;
        }


        public static function delete($id_cliente) {
            $db = new Connection();
            $query = "DELETE FROM `productos2` WHERE id=?";
            $stmt = $db->prepare($query);
            $stmt->bind_param("i", $id_cliente);
            $stmt->execute();
            return $stmt->affected_rows > 0;
        }

    }
?>