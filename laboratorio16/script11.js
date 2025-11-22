const form = document.querySelector("#form");
const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const cuerpo = document.querySelector("#cuerpo");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (nombre.value.trim() === "" || edad.value.trim() === "") return;

    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = nombre.value;

    const tdEdad = document.createElement("td");
    tdEdad.textContent = edad.value;

    const tdAcciones = document.createElement("td");

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.dataset.accion = "editar";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.dataset.accion = "eliminar";

    tdAcciones.appendChild(btnEditar);
    tdAcciones.appendChild(btnEliminar);

    tr.appendChild(tdNombre);
    tr.appendChild(tdEdad);
    tr.appendChild(tdAcciones);

    cuerpo.appendChild(tr);

    nombre.value = "";
    edad.value = "";
});

cuerpo.addEventListener("click", e => {
    const accion = e.target.dataset.accion;
    if (!accion) return;

    const fila = e.target.closest("tr");

    if (accion === "eliminar") {
        fila.remove();
    }

    if (accion === "editar") {
        const celdas = fila.querySelectorAll("td");
        const nuevoNombre = prompt("Nuevo nombre:", celdas[0].textContent);
        const nuevaEdad = prompt("Nueva edad:", celdas[1].textContent);
        if (nuevoNombre && nuevaEdad) {
            celdas[0].textContent = nuevoNombre;
            celdas[1].textContent = nuevaEdad;
        }
    }
});
