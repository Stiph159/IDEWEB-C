let contador = 0;

const span = document.getElementById("valor");
const menos = document.getElementById("menos");
const mas = document.getElementById("mas");
const mensaje = document.getElementById("mensaje");

mas.addEventListener("click", () => {
    contador++;
    span.textContent = contador;
    mensaje.textContent = "";
});

menos.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        span.textContent = contador;
        mensaje.textContent = "";
    } else {
        mensaje.textContent = "El contador no puede bajar de cero";
    }
});
