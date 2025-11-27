function validarEdad(edad) {
  if (edad < 0 || isNaN(edad)) {
    throw new Error("Edad invalida");
  }
  return edad;
}

try {
  validarEdad("hola");
} catch (e) {
  console.log("Error capturado:", e.message);
}
