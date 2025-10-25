let numero = Number(prompt("ingrese un numero para verificar si es armstrong:"));

let n = 0;
let temp = numero;
let suma = 0;

let contador = numero;
while (contador > 0) {
    contador = Math.floor(contador / 10);
    n++;
}

temp = numero;
while (temp > 0) {
    let digito = temp % 10;
    
    let potencia = 1;
    for (let i = 0; i < n; i++) {
        potencia = potencia * digito;
    }
    
    suma = suma + potencia;
    
    temp = Math.floor(temp / 10);
}

if (suma === numero) {
    console.log(numero + " es un numero armstrong.");
} else {
    console.log(numero + " no es un numero armstrong.");
}