<?php

// Desarrollado por Paulo Contrera - www.paulo-contrera.com para SygSeguros

    require_once "../connection/Connection.php";

    class Cliente {

        public static function getAll() {
            $db = new Connection();
            $query = "SELECT id, fecha, titulo, texto1 FROM novedades";
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
            $query = "SELECT id, fecha, titulo, texto1 FROM novedades WHERE id=?";
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

        public static function insert($titulo, $texto1) {
            $db = new Connection();
            $query = "INSERT INTO novedades (titulo, texto) VALUES (?, ?)";
            $stmt = $db->prepare($query);
            $stmt->bind_param("ss", $titulo, $texto1);
            $stmt->execute();
            return $stmt->affected_rows > 0;
        }

        public static function update($id_cliente, $fecha, $titulo, $texto1) {
            $db = new Connection();
            $query = "UPDATE novedades SET fecha=?, titulo=?, texto1=? WHERE id=?";
            $stmt = $db->prepare($query);
            $stmt->bind_param("sssi", $fecha, $titulo, $texto1, $id_cliente);
            $stmt->execute();
            return $stmt->affected_rows > 0;
        }

        public static function delete($id_cliente) {
            $db = new Connection();
            $query = "DELETE FROM novedades WHERE id=?";
            $stmt = $db->prepare($query);
            $stmt->bind_param("i", $id_cliente);
            $stmt->execute();
            return $stmt->affected_rows > 0;
        }

    }
?>