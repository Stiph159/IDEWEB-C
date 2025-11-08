function gradosARadianes(grados) {
    let radianes = grados * (Math.PI / 180);
    console.log(grados + "° = " + radianes.toFixed(4) + " radianes");
    console.log("Seno: " + Math.sin(radianes).toFixed(4));
    console.log("Coseno: " + Math.cos(radianes).toFixed(4));
}

function radianesAGrados(radianes) {
    let grados = radianes * (180 / Math.PI);
    console.log(radianes.toFixed(4) + " radianes = " + grados.toFixed(4) + "°");
}

let opcion = prompt("Elige una opción:\n1. Grados a Radianes\n2. Radianes a Grados");

if (opcion == 1) {
    let grados = parseFloat(prompt("Ingresa los grados:"));
    gradosARadianes(grados);
} else if (opcion == 2) {
    let radianes = parseFloat(prompt("Ingresa los radianes:"));
    radianesAGrados(radianes);
} else {
    console.log("Opción no válida");
}
