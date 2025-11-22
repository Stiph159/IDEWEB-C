const jsonLibros = `[
    { "titulo": "El Principito", "autor": "Antoine de Saint-Exupéry" },
    { "titulo": "1984", "autor": "George Orwell" },
    { "titulo": "Cien Años de Soledad", "autor": "Gabriel García Márquez" }
]`;

const libros = JSON.parse(jsonLibros);

const tabla = document.createElement("table");

const head = document.createElement("tr");
head.innerHTML = "<th>Título</th><th>Autor</th>";
tabla.appendChild(head);

for (const libro of libros) {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${libro.titulo}</td><td>${libro.autor}</td>`;
    tabla.appendChild(fila);
}

document.getElementById("tablaLibros").appendChild(tabla);
