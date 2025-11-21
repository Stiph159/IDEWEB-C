const boton = document.getElementById("btnModo");

boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    boton.textContent = document.body.classList.contains("oscuro")
        ? "Desactivar modo oscuro"
        : "Activar modo oscuro";
});
