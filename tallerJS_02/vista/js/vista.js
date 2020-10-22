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

     /**
      * Despliega una lista en un select
      * @param {string} select: id del select en el html
      * @param {array} lista: array de datos a desplegar en el select
      * @param {string} key: nombre del campo de valor
      * @param {string} txtMostrar: nombre del campo a visualizar
      */
     cargarSelect(select, lista, key, txtMostrar) {
        console.log("Paso 4 - Datos a desplegar en el Select: ", lista);
        $('#' + select + ' option').remove();
        $('#' + select).append('<option value = "0">Seleccione una opción...</option>');
        for (let j = 0; j < lista.length; j++) {
            this.cargarOption(lista[j], key, txtMostrar, select)
        }
     }

     /**
      * Método auxiliar de cargarSelect
      * @param {array} reg: registro con datos a insertar en un option del select
      * @param {string} key: nombre del campo a cargar en value del option
      * @param {string} txtMostrar: nombre del campo a mostrar en el option
      * @param {string} select: id del select en el html
      */
     cargarOption(reg, key, txtMostrar, select) {
         $('#' + select).append('<option value ='
            + reg[key] + ' >'
            + reg[txtMostrar]
            + '</option>'
        );
     }

     /**
      * Despliega una ventana modal con título y mensaje
      * @param {string} titulo: título de la ventana modal
      * @param {string} msj: contenido del cuerpo de la ventana modal
      */

      mostrarModal(titulo, msj){
          document.getElementById('modal-titulo').innerHTML = titulo;
          document.getElementById('modal-cuerpo').innerHTML = msj;
          $("#myModal").modal();    //Muestra la ventana modal
      }
 }