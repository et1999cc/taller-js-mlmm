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

