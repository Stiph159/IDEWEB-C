import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(5, 3));
console.log("Multiplicacion:", multiplicar(5, 3));

try {
  console.log("Division:", dividir(10, 0));
} catch (error) {
  console.error("Error en division:", error.message);
}
