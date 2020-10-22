<?php
/**
 * Proyecto: INVENTARIOS
 * Módulo: SERVIDOR - DESPACHADOR
 * Recibe las solicitudes de datos desde el cliente.
 * Encamina la solicitud al proveedor de datos o devuelve error.
 * La respuesta debe contener:
 * 'ok' = 0/1 (error/exito) u otros valores, explicados en 'msj'
 * 'msj' = texto con el mensaje de error, o vacío
 * 'data' = vació o con el array de datos devuelto al cliente, en formaro JSON
 */

include_once 'conexionBD.php';
include_once 'consultasBD.php';
$sqlTest = '';      //Para prueba de PK
$sqlTest1 = '';     //Para prueba de FK
$datos = array();   //Valores a pasar al PDO

if (isset($_POST['opcion'])) {
    switch ($_POST['opcion']) {     //Opción de consulta solicitada
        //--------------- PROCESOS DEL MÓDULO PROVEEDOR -----------------------------------

        case 'consultarProveedores':
            $cons = 'SELECT * FROM proveedor';
            leerRegistro($cons, $datos);
            break;

        case 'crearProveedor':
            $data = $_POST["data"];
            $sqlTest = 'SELECT idProveedor FROM proveedor WHERE nitProveedor = '. $data["nitProveedor"];
            $cons = 'INSERT INTO proveedor (nombreProveedor, nitProveedor, direccionProveedor, correoProveedor, telefonoProveedor)
            VALUES (?, ?, ?, ?, ?)';

            $datos[0] = $data["nombreProveedor"];
            $datos[1] = $data["nitProveedor"];
            $datos[2] = $data["direccionProveedor"];
            $datos[3] = $data["correoProveedor"];
            $datos[4] = $data["telefonoProveedor"];

            $reg = actualizar($cons, $datos);
            $arr = array();
            $arr['ok'] = $reg;
            $arr['msj'] = '';
            $arr['data'] = '';
            echo json_encode($arr);
            break;

        case 'modificarProveedor':
            $data = $_POST["data"];
            $cons = 'UPDATE proveedor SET nombreProveedor = ?, nitProveedor = ?, direccionProveedor = ?, correoProveedor = ?, telefonoProveedor = ? WHERE idProveedor = ?';

            $datos[0] = $data["nombreProveedor"];
            $datos[1] = $data["nitProveedor"];
            $datos[2] = $data["direccionProveedor"];
            $datos[3] = $data["correoProveedor"];
            $datos[4] = $data["telefonoProveedor"];
            $datos[5] = $data["idProveedor"];
            
            $reg = actualizar($cons, $datos);
            $arr['ok'] = $reg;
            $arr['msj'] = '';
            $arr['data'] = '';
            echo json_encode($arr, JSON_UNESCAPED_UNICODE);
            break;
        
        default:
            $arr['ok'] = 0;
            $arr['msj'] = 'Opción equivocada';
            $arr['data'] = '';
            echo json_encode($arr, JSON_UNESCAPED_UNICODE);
            return;     //Termina
    }
} else {
    $arr['ok'] = 0;
    $arr['msj'] = 'Acceso denegado';
    $arr['data'] = '';
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    return;     //Termina
}

