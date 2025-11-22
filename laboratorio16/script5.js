const input = document.getElementById("texto");
const agregar = document.getElementById("agregar");
const borrar = document.getElementById("borrar");
const lista = document.getElementById("lista");

agregar.addEventListener("click", () => {
    if (input.value.trim() === "") return;
    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);
    input.value = "";
});

borrar.addEventListener("click", () => {
    const ultimo = lista.lastElementChild;
    if (ultimo) lista.removeChild(ultimo);
});
