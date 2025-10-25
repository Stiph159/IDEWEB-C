let totalParcial = 0;
let continuar = 1;
let precioProducto = 0;
let descuento = 0;
let totalFinal = 0;

let presupuesto = Number(prompt("ingrese su presupuesto maximo para la compra:"));

if (presupuesto <= 0) {
    console.log("presupuesto invalido o cero. no se puede iniciar la compra.");
} else {

    console.log("presupuesto maximo: " + presupuesto.toFixed(2));

    do {
        let limiteRestante = presupuesto - totalParcial;
        
        if (limiteRestante <= 0) {
            console.log("presupuesto agotado. finalizando la compra.");
            continuar = 0;
            break;
        }

        precioProducto = Number(prompt("ingrese el precio del producto (o ingrese 0 para terminar). limite restante: " + limiteRestante.toFixed(2) + ":"));

        if (precioProducto === 0) {
            continuar = 0;

        } else if (precioProducto > 0) {
            
            if (totalParcial + precioProducto <= presupuesto) {
                totalParcial = totalParcial + precioProducto;
            } else {
                console.log("el precio de este producto (" + precioProducto.toFixed(2) + ") supera el presupuesto restante. no fue agregado.");
            }
            
        } else {
            console.log("precio invalido.");
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
}