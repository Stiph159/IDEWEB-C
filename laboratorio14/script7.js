function distanciaPuntos(x1, y1, x2, y2) {
    let distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    let origen1 = Math.sqrt(x1**2 + y1**2);
    let origen2 = Math.sqrt(x2**2 + y2**2);
    let sumaOrigenes = origen1 + origen2;
    console.log("Distancia entre los puntos: " + distancia.toFixed(4));
    console.log("Distancia del punto 1 al origen: " + origen1.toFixed(4));
    console.log("Distancia del punto 2 al origen: " + origen2.toFixed(4));
    console.log("Suma de distancias al origen: " + sumaOrigenes.toFixed(4));
}

let x1 = parseFloat(prompt("Ingresa x1:"));
let y1 = parseFloat(prompt("Ingresa y1:"));
let x2 = parseFloat(prompt("Ingresa x2:"));
let y2 = parseFloat(prompt("Ingresa y2:"));

distanciaPuntos(x1, y1, x2, y2);
