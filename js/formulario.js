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
    let valorHeading = document.createTextNode("valor");
    nodoEncabezado3.appendChild(valorHeading);

    let nodoEncabezado4 = document.createElement("th")
    nodoFilaEncabezado.appendChild(nodoEncabezado4);
    let unidadHeading = document.createTextNode("UnidadesStock");
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

    let inputValor = document.getElementById("valor").value;
    let inputValorNodo = document.createTextNode(inputValor);

    let inputUnidad = document.getElementById("UnidadesStock").value;
    let inputUnidadNodo = document.createTextNode(inputUnidad);

    cargarInfoTabla(inputCodigoNodo, inputDescripcionNodo, inputValorNodo, inputUnidadNodo );

   }
}
function cargarInfoTabla(codigo, descripcion, valor, unidad) {
    let nodoProducto = document.createElement("tr");
    nodoTabla.appendChild(nodoProducto)

    let nodoCodigoTD = document.createElement("td");
    nodoProducto.appendChild(nodoCodigoTD);
    nodoCodigoTD.appendChild(codigo);

    let nodoDescTD = document.createElement("td");
    nodoProducto.appendChild(nodoDescTD);
    nodoDescTD.appendChild(descripcion);

    let nodoValTD = document.createElement("td");
    nodoProducto.appendChild(nodoValTD);
    nodoValTD.appendChild(valor);

    let nodoUnidadTD = document.createElement("td");
    nodoProducto.appendChild(nodoUnidadTD);
    nodoUnidadTD.appendChild(unidad);


}


function validarFormulario(){
    let inputCodigo = document.getElementById("codigo").value.trim();
    if(inputCodigo ==""){
    alert("porfavor ingrese el codigo del producto");

    return false;
} 
let inputDescripcion = document.getElementById("caracteristicas").value.trim();
    if(inputDescripcion ==""){
    alert("porfavor ingrese la descripcion del producto") 

 return false;
}
let inputValor = document.getElementById("valor").value.trim();
if(inputValor ==""){
alert("porfavor ingrese el valor del producto") 

return false;
}

let inputUnidad = document.getElementById("UnidadesStock").value.trim();
if(inputUnidad ==""){
alert("porfavor ingrese las unidades del producto") 

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
