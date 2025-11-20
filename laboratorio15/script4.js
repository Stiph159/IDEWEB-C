const items = document.querySelectorAll("li");

items.forEach(li => {
    li.classList.add("resaltado");     // Agregar clase
    li.classList.remove("oculto");     // Eliminar si existe
});
