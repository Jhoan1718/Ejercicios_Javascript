

/* let inicio = 0;
let numUnidades = "";
    
function aumentar(){
     if( inicio <= 9) {
         numUnidades = document.getElementById('numUnidades').value = ++inicio;

          */
         /* document.getElementById("total").innerHTML = cantidad; */
            
     /*    }
        calcularSubtotal();
    }
function disminuir(){
     if( inicio >= 1) {
          numUnidades = document.getElementById('numUnidades').value = --inicio;
          
        }
        calcularSubtotal();
       
    }

function calcularSubtotal() {   
    let valorUnidad = document.getElementById("numUnidades").innerHTML;
   
    let cantidadElementos = document.getElementById("total").innerHTML;
    let valorCompra = valorUnidad * cantidadElementos;
    document.getElementById("multiplicar").innerHTML = valorCompra;
    
}
 */
"user strict"

let inicio = 0
let cantidad = "";
let cantidadProducto
let totalProductos = 30000;
let cantidadYaProducto

function aumentarUnidades() {


    if(inicio <=9){
        cantidad = document.getElementById("cantidad").value = ++inicio;
        // document.getElementById("total").innerHTML = cantidad;

        cantidadProducto = document.getElementById("igual");
        cantidadProducto.innerHTML = inicio;

        cantidadYaProducto = document.getElementById("multiplicar");
        cantidadYaProducto.innerHTML = inicio * totalProductos ;

     

    }
}
function disminuirUnidades() {
    if(inicio >=1){
        cantidad = document.getElementById("cantidad").value = --inicio;
        // document.getElementById("total").innerHTML = cantidad

        cantidadProducto = document.getElementById("igual");
        cantidadProducto.innerHTML = inicio;

        cantidadYaProducto = document.getElementById  ("multiplicar");
        cantidadYaProducto.innerHTML = inicio * totalProductos ;
      
    }
}










