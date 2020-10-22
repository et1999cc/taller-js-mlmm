/**
 * Módulo principal CAPA CONTROLADOR
 */

/**** VARIABLES GLOBALES **********************************************/

//Objeto de la clase Vista
let vista = new Vista();

//Módulo Proveedor
let listaProveedores = [];
let proveedor = new Proveedor();

/** ********************************************************************
 * Asigna manejadores de eventos a los botones del menú principal
 * Se ejecuta al cargar la página
 */
window.onload = function() {
    document.getElementById("btnProveedor").addEventListener("click", mostrarFormCrearProv);
    document.getElementById("btnCliente").addEventListener("click", mostrarFormCrearCliente);
    document.getElementById("btnCrearProd").addEventListener("click", mostrarFormCrearProducto);
    document.getElementById("btnIngresarProd").addEventListener("click", mostrarFormIngreso);
    document.getElementById("btnVenderProd").addEventListener("click", mostrarFormVenta);
    document.getElementById("btnConsultar").addEventListener("click", mostrarTablaVentas);
    document.getElementById("btnTendencia").addEventListener("click", mostrarTendenciaVentas);
    document.getElementById("btnRentabilidad").addEventListener("click", mostrarRentabilidad);
};

/**
 * BLOQUE CRUD PROVEEDOR
 */
function mostrarFormCrearProv() {
    vista.mostrarPlantilla('formProveedor', 'areaTrabajo');
    document.getElementById("btnProveedorLimpiar").addEventListener("click", limpiarFormularioProveedor);
    document.getElementById("btnProveedorModificar").addEventListener("click", modificarProveedor);
    document.getElementById("btnProveedorCrear").addEventListener("click", crearProveedor);
    proveedor.consultarProveedores(consultarProveedoresRetorno);
}

function consultarProveedoresRetorno(datos) {
    console.log("Paso 3 - Respuesta en array JS: ", datos);
    listaProveedores = []; //Limpia la lista
    for (let i = 0; i < datos['data'].length; i++) {
        proveedor = new Proveedor(datos['data'][i]);
        listaProveedores.push(proveedor);
    }
    //Insertar en el select del formulario
    vista.cargarSelect('idProveedor', datos['data'], 'idProveedor', 'nombreProveedor');
}

function mostrarFormCrearCliente() {
    vista.mostrarPlantilla('formCliente', 'areaTrabajo');
    document.getElementById("btnClienteLimpiar").addEventListener("click", limpiarFormularioCliente);
}

/**
 * Formulario para crear productos
 */
function mostrarFormCrearProducto() {
    vista.mostrarPlantilla('formCrearArticulo', 'areaTrabajo');
    document.getElementById("btnCrearArticuloLimpiar").addEventListener("click", limpiarFormularioCrearProducto);
}

function mostrarFormIngreso() {
    vista.mostrarPlantilla('formIngresoArticulo', 'areaTrabajo');
    document.getElementById("btnIngresoArticuloLimpiar").addEventListener("click", limpiarFormularioComprarProducto);
}

function mostrarFormVenta() {
    vista.mostrarPlantilla('formVentaArticulo', 'areaTrabajo');
    document.getElementById("btnVenderArticuloLimpiar").addEventListener("click", limpiarFormularioVenderProducto);
}

function mostrarTablaVentas() {
    vista.mostrarPlantilla('mostrarVentas', 'areaTrabajo');
}

function mostrarTendenciaVentas() {
    vista.mostrarPlantilla('tendenciaVentas', 'areaTrabajo');
}

function mostrarRentabilidad() {
    vista.mostrarPlantilla('rentabilidad', 'areaTrabajo');
}

// *********** EVENTOS EN EL FORMULARIO PROVEEDOR ********************
function limpiarFormularioProveedor() {
    vista.limpiarFormulario('formularioProveedor');
}

/**
 * Crea un nuevo registro en la tabla de Proveedor
 */
function crearProveedor() {

}

/**
 * Modifica un registro en la tabla Proveedor
 */
function modificarProveedor() {

}