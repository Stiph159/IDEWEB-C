const imagenGrande = document.getElementById("imagenGrande");
const miniaturas = document.querySelectorAll(".mini");

miniaturas.forEach(img => {
    img.addEventListener("click", () => {
        imagenGrande.src = img.src;
    });
});
