const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");

form.addEventListener("submit", e => {
    e.preventDefault();
    errorNombre.innerHTML = "";
    errorCorreo.innerHTML = "";
    let valido = true;

    if (nombre.value.trim() === "") {
        const span = document.createElement("span");
        span.textContent = "El nombre es obligatorio";
        span.style.color = "red";
        errorNombre.appendChild(span);
        valido = false;
    }

    if (correo.value.trim() === "") {
        const span = document.createElement("span");
        span.textContent = "El correo es obligatorio";
        span.style.color = "red";
        errorCorreo.appendChild(span);
        valido = false;
    }

    if (valido) alert("Formulario válido");
});
