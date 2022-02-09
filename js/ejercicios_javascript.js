"Use strict"
//ej 1
console.log("hola mundo");
// ej 


var nombre = "(sr.)jhoan Sebastian";
if(nombre){
    console.log("bienvenido"+" "+nombre)
};
//ej 3
let costoProducto = 20000;
let domicilio = 5000;
let impuesto = .10;


console.log("el valor inicial es "+"$"+costoProducto)
let subtotal = costoProducto + (costoProducto*impuesto);
console.log ("el valor subtotal "+"$"+subtotal);
let valortotal = (subtotal+domicilio);
console.log ("el valor total "+"$"+valortotal);

//ej 4

let costoinicial = 60000;
let primerDescuento = .05;
let segundoDescuento = .10;
let producto = costoinicial -(costoinicial* primerDescuento)
let producto2 = costoinicial -(costoinicial* segundoDescuento)
console.log("el valor inicial es $"+costoinicial);

if (costoinicial <= 30000){
console.log ("sin descuento");}

else if(costoinicial > 30000 && costoinicial < 100000){
console.log("el valor final es $"+producto);}

else if(costoinicial >= 100000){
    console.log("el valor final es $"+producto2);} 
else
console.log(" ")











