"use strict"
class vuelos {
    constructor(origen,destino, precio,horaInicio,horaFinal,directo){
        this.origen=origen;
        this.destino=destino;
        this.precio=precio;
        this.horaInicio = horaInicio;
        this.horaFinal = horaFinal;
        this.directo = directo;

    }
}
let vuelo=[{
    "origen": "Bogotá",
    "destino" : "Cartagena",
    "precio": "COP "+25000,
    "horaInicio" : "08:20 am",
    "horaFinal" : "10:00 pm",
    "directo" : "Vuelo Directo",
},
{
  "origen": "Bogotá",
  "destino" : "Cartagena",
  "precio": "COP " + 48000,
  "horaInicio" : "09:25 am",
  "horaFinal" : "5:55 pm ",
  "directo" : "Vuelo Directo",
}];
function MostrarVuelos(){
    for( let i = 0; i < vuelo.length; i++) {
    cargarVuelos (vuelo[i].origen, vuelo[i].destino, vuelo[i].precio,vuelo[i].horaInicio,vuelo[i].horaFinal, vuelo[i].directo );
    }
   
}



    function cargarVuelos(origen, destino, precio, horaInicio,horaFinal,directo){
        let contentVuelo = document.createElement("div");
        let contentPrincpial = document.getElementById("main-content");
        contentPrincpial.appendChild(contentVuelo);
        contentVuelo.setAttribute("class", "style-contentVuelo")
        
        let horaInicioVuelo = document.createElement("label");
    contentVuelo.appendChild(horaInicioVuelo);
    let texthorainicio = document.createTextNode(horaInicio);
    horaInicioVuelo.appendChild(texthorainicio);
    horaInicioVuelo.setAttribute("class", "style-horaInicio")

    let directoVuelo = document.createElement("label");
    contentVuelo.appendChild(directoVuelo);
    let textdirecto = document.createTextNode(directo);
    directoVuelo.appendChild(textdirecto);
    directoVuelo.setAttribute("class", "style-directo")

    let horaFinalVuelo = document.createElement("label");
    contentVuelo.appendChild(horaFinalVuelo);
    let texthorafinal = document.createTextNode(horaFinal);
    horaFinalVuelo.appendChild(texthorafinal);
    horaFinalVuelo.setAttribute("class", "style-horaFinal")

        let origenVuelo = document.createElement ("label")
    contentVuelo.appendChild(origenVuelo);
    let textorigen =  document.createTextNode(origen);
    origenVuelo.appendChild(textorigen);
    origenVuelo.setAttribute("class", "style-origen")
    
    
      let precioVuelo = document.createElement ("label")
    contentVuelo.appendChild(precioVuelo);
    let textprecio =  document.createTextNode(precio);
    precioVuelo.appendChild(textprecio);
    precioVuelo.setAttribute("class", "style-precio")

     let destinoVuelo = document.createElement ("label")
    contentVuelo.appendChild(destinoVuelo);
    let textdestino =  document.createTextNode(destino);
    destinoVuelo.appendChild(textdestino);
    destinoVuelo.setAttribute("class", "style-destino")


        

    
  

    

    
   

}