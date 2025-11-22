const cuadro = document.getElementById("cuadro");
const mover = document.getElementById("mover");
const reiniciar = document.getElementById("reiniciar");

mover.addEventListener("click", () => {
    cuadro.classList.add("mover");
});

reiniciar.addEventListener("click", () => {
    cuadro.classList.remove("mover");
});
