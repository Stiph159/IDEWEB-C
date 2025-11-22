document.getElementById("btnAsignar").addEventListener("click", () => {
    const secciones = document.querySelectorAll("section");
    secciones.forEach((sec, i) => sec.setAttribute("data-index", i));
});
