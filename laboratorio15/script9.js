const seccion = document.getElementById("contenedor");
const lista = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Elemento ${i}`;
    lista.appendChild(li);
}

seccion.appendChild(lista);
