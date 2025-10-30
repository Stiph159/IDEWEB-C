const Descuento = function (precio, desc){
    menor = precio * (desc / 100);
    return precio - menor;
}
let precio = Number(prompt("ingrese el precio"));
let desc = Number(prompt("ingrese el descuento"));

console.log("El precio total es: " + Descuento(precio, desc) );