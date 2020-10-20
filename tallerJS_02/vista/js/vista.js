/**
 * PROYECTO: control de inventarios
 * MODULO: VISTA
 * PROGRAMA: vista.js
 * ver: 1.0
 */

 /**
  * Contiene funciones generales para la vista del proyecto.
  */
 class Vista {
     constructor() {

     }

     /**
      * Carga FORM en DESTINO. Confirma que la plantilla exista
      * @param {string} form: id de la plantilla a cargar
      * @param {string} destino: id del elemento donde se cargará
      */
     mostrarPlantilla(form, destino){
        //Limpia contenido 
        let dest = document.getElementById(destino);
        dest.innerHTML = '';
        let template = document.getElementById(form);
        //Si la plantilla existe...
        if(template){
            let clon = template.content.cloneNode(true);
            //Inserta
            dest.appendChild(clon);
        }
     }

     /**
      * Limpia el contenido de los Inputs de un formulario
      * @param {string} idForm: identificador del formulario
      */
     limpiarFormulario(idForm){
         let form = document.getElementById(idForm).elements;
         for (let i = 0; i < form.length; i++) {
             if(document.getElementById(form[i].id).tagName === 'SELECT'){
                 document.getElementById(form[i].id).value = '0';
             }else{
                 document.getElementById(form[i].id).value = '';
             }
         }
     }
 }