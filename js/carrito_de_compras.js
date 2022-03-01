let inicio = 0;
let numUnidades = "";
    
function aumentar(){
     if( inicio <= 9) {
         numUnidades = document.getElementById('numUnidades').value = ++inicio;
         document.getElementById("total").innerHTML = cantidad;
            
        }
        calcularTotal();
    }
function disminuir(){
     if( inicio >= 1) {
          numUnidades = document.getElementById('numUnidades').value = --inicio;
        }
    }

function calcularTotal() {
    let valorUnidad = document.getElementById("unitario").innerHTML;
    let cantidadElementos = document.getElementById("total").innerHTML;
    let valorCompra = valorUnidad * cantidadElementos;
    document.getElementById("multiplicar").innerHTML = valorCompra;
    
}







