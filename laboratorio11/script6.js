let n = Number(prompt("Ingrese N para encontrar los primos:"));

if (n < 2) {
    console.log("No hay primos en ese rango.");
} else {
    console.log("Primos hasta " + n + ":");

    for (let num = 2; num <= n; num++) {
        let esPrimo = 1;
        let divisor = 2;
        
        while (divisor * divisor <= num) {
            if (num % divisor === 0) {
                esPrimo = 0;
                break;
            }
            divisor++;
        }

        if (esPrimo === 1) {
            console.log(num);
        }
    }
}