let n = Number(prompt("Ingrese N para sumar el rango de 1 a N:"));

if (n < 1) {
    console.log("El número debe ser mayor o igual a 1.");
} else {
    let sumaTotal = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 5 !== 0) {
            sumaTotal = sumaTotal + i;
        }
    }

    console.log("Suma total omitiendo multiplos de 5: " + sumaTotal);
}