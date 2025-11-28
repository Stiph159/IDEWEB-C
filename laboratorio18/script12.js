const regex = /[.!?]+/;

function dividirOraciones(texto) {
  return texto.split(regex).filter(oracion => oracion.trim() !== "");
}

const texto = "Hola. Como estas? Bien!";
console.log(dividirOraciones(texto));
