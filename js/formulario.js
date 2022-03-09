let nodoTabla = undefined;

function CrearEncabezado(){
    nodoTabla = document.createElement("table");
    let contenedor = document.getElementById("tabla-js");
    contenedor.appendChild(nodoTabla);
 
    
    let nodoFilaEncabezado = document.createElement("tr");
    nodoTabla.appendChild(nodoFilaEncabezado);

    let nodoEncabezado1 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado1);
    let codigoHeading1 = document.createTextNode("codigo");
    nodoEncabezado1.appendChild(codigoHeading1);

    let nodoEncabezado2 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado2);
    let descripHeading1 = document.createTextNode("caracteristicas");
    nodoEncabezado2.appendChild(descripHeading1);

    let nodoEncabezado3 = document.createElement("th")
    nodoFilaEncabezado.appendChild(nodoEncabezado3);
    let valorHeading = document.createTextNode("valor Unitario");
    nodoEncabezado3.appendChild(valorHeading);

    let nodoEncabezado4 = document.createElement("th")
    nodoFilaEncabezado.appendChild(nodoEncabezado4);
    let unidadHeading = document.createTextNode("Unidades en stock");
    nodoEncabezado4.appendChild(unidadHeading);

 

    nodoTabla.setAttribute("class", "table-style");
    nodoTabla.setAttribute("id", "table-stock");
    
     
}

    function validarTabla (){
        if (!document.getElementById ("table-stock")) {
            CrearEncabezado();
       } 
    else {
    alert("ya esta");
   }
}
function cargarProducto() {
    if (validarFormulario()){

    
    validarTabla();

    let inputCodigo = document.getElementById("codigo").value;
    let inputCodigoNodo = document.createTextNode(inputCodigo);
  
    let inputDescripcion = document.getElementById("caracteristicas").value;
    let inputDescripcionNodo = document.createTextNode(inputDescripcion);

    cargarInfoTabla(inputCodigoNodo, inputDescripcionNodo);
   }
}
function cargarInfoTabla(codigo, descripcion) {
    let nodoProducto = document.createElement("tr");
    nodoTabla.appendChild(nodoProducto)

    let nodoCodigoTD = document.createElement("td");
    nodoProducto.appendChild(nodoCodigoTD);
    nodoCodigoTD.appendChild(codigo);

    let nodoDescTD = document.createElement("td");
    nodoProducto.appendChild(nodoDescTD);
    nodoDescTD.appendChild(descripcion);
    
}

function validarFormulario(){
    let inputCodigo = document.getElementById("codigo").value.trim();
    if(inputCodigo ==""){
    alert("porfavor ingrese el codigo del producto")
    return false;

   }
  return true;  
}  
/* function registrarProducto(){
    let txtCodigo = document.getElementById("codigo").value.trim();
    let nodoFilaProducto = document.createElement("tr");
    nodoTabla.appendChild(nodoFilaProducto);
    let nodoTDcodigo = document.createElement("td");
    nodoFilaProducto.appendChild(nodoTDcodigo);
    let nodoCodigo = document.createTextNode(txtCodigo);
    nodoTDcodigo.appendChild(nodoCodigo);
    
}
 */
