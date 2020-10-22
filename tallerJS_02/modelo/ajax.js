/**
 * Clase ABSTRACTA para conectar al servidor
 */

 class ConexionAjax{
     constructor() {

     }

     /**
      * @param {array} datos //Datos de la consulta.
      * @param {función} funcionRetorno //Función que ejecuta al finalizar validación.
      */

     ejecutarAjax(datos, funcionRetorno) {
        $.ajax({
            url: 'servidor/despachador.php',    //Conecta al archivo que almacena las consultas.
            data: datos,                        //Consulta y parámetros.
            type: 'post'                        //Método de petición al servidor.
        }).done( function (response) {          //Cuando el servidor responde correctamente.
            console.log("Paso 2 - Respuesta JSON del proveedor: ", response);
            let resp = JSON.parse(response);    //Validar JSON.
            if (typeof resp == 'object') {
                funcionRetorno(resp);           //Ejecuta la función de retorno.
            } else {
                console.log("Error en los datos de respuesta: " + response);    //Mensaje si la función no es válida, normalmente por error en el código PHP.
            }
        }).fail( function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' ' + errorThrown);
        });
     }
 }