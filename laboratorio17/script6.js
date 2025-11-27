function nivel2() {
  try {
    console.log(x);
  } catch (e) {
    console.log("Nivel 2 atrapo el error:", e.message);
    throw e;
  }
}

function nivel1() {
  try {
    nivel2();
  } catch (e) {
    console.log("Nivel 1 recibio el error:", e.message);
    throw e;
  }
}

try {
  nivel1();
} catch (e) {
  console.log("ERROR FINAL capturado en el nivel superior:", e.message);
}
