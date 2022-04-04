"use strict"
class vuelos {
    constructor(origen,destino, precio,){
        this.origen=origen;
        this.destino=destino;
        this.precio=precio;

    }
}
let vuelo=[{
    "origen": "BGT",
    "destino" : "CTG",
    "precio": 25000,
},
{
  "origen": "BGT",
  "destino" : "CTG",
  "precio": 48000,
}];
function MostrarVuelos(){
    for( let i = 0; i < vuelo.length; i++) {
    cargarVuelos (vuelo[i].origen, vuelo[i].destino, vuelo[i].precio);
    }
   
}
function cargarVuelos(origen, destino, precio){
    let contentVuelo = document.createElement("div");
    let contentPrincipal = document.getElementById("main-content")
    contentPrincipal.appendChild(contentVuelo);
    contentPrincipal.setAttribute


    let origenVuelo = document.createElement ("label")
    contentVuelo.appendChild(origenVuelo);
    let textorigen =  document.createTextNode(origen);
    origenVuelo.appendChild(textorigen);

    let destinoVuelo = document.createElement ("label")
    contentVuelo.appendChild(destinoVuelo);
    let textdestino =  document.createTextNode(destino);
    destinoVuelo.appendChild(textdestino);
  
    let precioVuelo = document.createElement ("label")
    contentVuelo.appendChild(precioVuelo);
    let textprecio =  document.createTextNode(precio);
    precioVuelo.appendChild(textprecio);

}