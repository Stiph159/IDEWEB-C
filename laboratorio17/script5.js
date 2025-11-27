try {
  let x = null;
  x.nombre;
} catch (e) {
  if (e instanceof TypeError) {
    console.log("Se detecto un TypeError");
  } else {
    console.log("Se detecto otro tipo de error");
  }
}
