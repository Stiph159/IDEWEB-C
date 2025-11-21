const texto = document.getElementById("texto");
const boton = document.getElementById("btnCambiar");

boton.addEventListener("click", () => {
    texto.textContent = "Texto cambiado";
});
