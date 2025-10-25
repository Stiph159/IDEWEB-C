let totalParcial = 0;
let continuar = 1;
let precioProducto = 0;
let descuento = 0;
let totalFinal = 0;

do {
    precioProducto = Number(prompt("ingrese el precio del producto (o ingrese 0 para terminar):"));

    if (precioProducto === 0) {
        continuar = 0;
    } else if (precioProducto > 0) {
        totalParcial = totalParcial + precioProducto;
    } else {
        console.log("precio invalido. solo se permiten numeros positivos o 0 para terminar.");
    }
    
} while (continuar !== 0);

console.log("total parcial a pagar: " + totalParcial.toFixed(2));

if (totalParcial > 100) {
    console.log("tiene un descuento del 10%");
    descuento = totalParcial * 0.10;
    
} else if (totalParcial >= 50 && totalParcial <= 100) {
    console.log("gana un cupon de 5%");
    descuento = totalParcial * 0.05;
    
} else {
    console.log("no aplica descuento");
    descuento = 0;
}

totalFinal = totalParcial - descuento;

console.log("total final a pagar: " + totalFinal.toFixed(2));