const parrafo = document.getElementById("texto");
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Párrafo reemplazado";
parrafo.replaceWith(nuevoDiv);
