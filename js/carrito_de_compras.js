let inicio = 0;
let numUnidades = "";
    
function aumentar(){
     if( inicio <= 9) {
         numUnidades = document.getElementById('numUnidades').value = ++inicio;
         /* document.getElementById("total").innerHTML = cantidad; */
            
        }
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
    alert(total)
    let cantidadElementos = document.getElementById("total").innerHTML;
    let valorCompra = valorUnidad * cantidadElementos;
    document.getElementById("multiplicar").innerHTML = valorCompra;
    
}







