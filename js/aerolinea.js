"use strict"
class vuelos {
    constructor(origen,destino, precio,){
        this.origen=origen;
        this.destino=destino;
        this.precio=precio;

    }
}
let vuelo=[{
    "origen": "bogota",
    "destino" : "Cartagena",
    "precio": 25000,
},
{
  "origen": "bogota",
  "destino" : "Cartagena",
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
    contentPrincipal.setAttribute("class", "style-contentVuelo")


    let origenVuelo = document.createElement ("label")
    contentVuelo.appendChild(origenVuelo);
    let textorigen =  document.createTextNode(origen);
    origenVuelo.appendChild(textorigen);
    origenVuelo.setAttribute("class", "style-origen")

    let destinoVuelo = document.createElement ("label")
    contentVuelo.appendChild(destinoVuelo);
    let textdestino =  document.createTextNode(destino);
    destinoVuelo.appendChild(textdestino);
    destinoVuelo.setAttribute("class", "style-destino")
  
    let precioVuelo = document.createElement ("label")
    contentVuelo.appendChild(precioVuelo);
    let textprecio =  document.createTextNode(precio);
    precioVuelo.appendChild(textprecio);
    precioVuelo.setAttribute("class", "style-precio")

}