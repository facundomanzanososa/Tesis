<?php

// Desarrollado por Paulo Contrera - www.paulo-contrera.com para SygSeguros

    require_once "../connection/Connection.php";

    class Cliente {

        public static function getAll() {
            $db = new Connection();
            $query = "SELECT `id`, `SKU`, `RFID`, `Zona`, `HoraCreacion`, `HoraMov`, `Marca`, `Talle`, `Sexo` FROM `productos` WHERE 1";
            $resultado = $db->query($query);
            $datos = [];
            if($resultado->num_rows) {
                while($row = $resultado->fetch_assoc()) {
                    $datos[] = $row;
                }
            }
            return $datos;
        }

        public static function getWhere($id_cliente) {
            $db = new Connection();
            $query = "SELECT `id`, `SKU`, `RFID`, `Zona`, `HoraCreacion`, `HoraMov`, `Marca`, `Talle`, `Sexo` FROM `productos` WHERE id=?";
            $stmt = $db->prepare($query);
            $stmt->bind_param("i", $id_cliente);
            $stmt->execute();
            $resultado = $stmt->get_result();
            $response = [];
            if($resultado->num_rows) {
                while($row = $resultado->fetch_assoc()) {
                    $response = $row;
                }
            }
            return $response;
        }

        public static function insert($SKU, $RFID, $Zona, $Marca, $Talle, $Sexo) {
            $db = new Connection();
            $query = "INSERT INTO productos(SKU, RFID, Zona, Marca, Talle, Sexo) VALUES (?,?,?,?,?,?)";
            $stmt = $db->prepare($query);
            $stmt->bind_param("ssssss",$SKU, $RFID, $Zona, $Marca, $Talle, $Sexo);
            $stmt->execute();
            return $stmt->affected_rows > 0;
        }

        public static function update($id_cliente, $Zona, $Marca, $Talle, $Sexo) {
            $db = new Connection();
            $query = "UPDATE productos SET Zona=?, Marca=?, Talle=?, Sexo=? WHERE id=?";
            $stmt = $db->prepare($query);
            $stmt->bind_param("ssssi", $Zona, $Marca, $Talle, $Sexo, $id_cliente);
            $stmt->execute();
            return $stmt->affected_rows > 0;
        }

        public static function updateZona($id_cliente, $Zona) {
            $db = new Connection();
            $query = "UPDATE productos SET Zona=? WHERE id=?";
            $stmt = $db->prepare($query);
            $stmt->bind_param("si", $Zona, $id_cliente);
            $stmt->execute();
            return $stmt->affected_rows > 0;
        }

        public static function delete($id_cliente) {
            $db = new Connection();
            $query = "DELETE FROM `productos` WHERE id=?";
            $stmt = $db->prepare($query);
            $stmt->bind_param("i", $id_cliente);
            $stmt->execute();
            return $stmt->affected_rows > 0;
        }

    }
?>