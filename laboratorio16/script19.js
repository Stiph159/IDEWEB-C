const jsonTareas = `[
    { "titulo": "Estudiar JS", "completada": true },
    { "titulo": "Hacer ejercicios", "completada": false },
    { "titulo": "Leer documentación", "completada": true }
]`;

const tareas = JSON.parse(jsonTareas);

const ul = document.getElementById("tareasLista");

for (const t of tareas) {
    const li = document.createElement("li");
    li.textContent = t.titulo;
    li.style.color = t.completada ? "green" : "red";
    ul.appendChild(li);
}
