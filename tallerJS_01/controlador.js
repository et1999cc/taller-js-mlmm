/**
 * controlador.js Código JS para el ejercicio 01 del TALLER JS.
 * Captura el evento clic del botón y despliega un mensaje
 * Desarrollador por: MLMM
 * Fecha: 02/06/2020
 * Versión: 1.0
 */

 //Al momento de cargar, asigna manejador de evento al botón
 document.getElementById('btnSaludar').addEventListener('click',saludar,false);
 document.getElementById('btnBorrar').addEventListener('click',borrar,false);

 /**
  * Modifica el ontenido interno de una etiqueda
  */
function saludar(){
    let mensaje = "HOLA MUNDO!!";
    let txtSaludo = document.getElementById('saludo');
    txtSaludo.innerHTML = mensaje;
}

function borrar(){
    let txtSaludo = document.getElementById('saludo');
    txtSaludo.innerHTML = "";
}