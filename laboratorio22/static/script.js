const API = "/equipos";

function listar() {
  fetch(API)
    .then(r => r.json())
    .then(d => salida.textContent = JSON.stringify(d, null, 2));
}

function crear() {
  fetch(API, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      nombre: nombre.value,
      ciudad: ciudad.value,
      nivelAtaque: ataque.value,
      nivelDefensa: defensa.value
    })
  }).then(listar);
}
