function NumAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let min = Number(prompt("Ingrese el minimo"));
let max = Number(prompt("Ingrese el maximo"));

console.log("Numero aleatorio: " + NumAleatorio(min, max));
