document.getElementById("btnContar").addEventListener("click", () => {
    const cantidad = document.querySelectorAll("div").length;
    const p = document.createElement("p");
    p.textContent = "Cantidad de divs: " + cantidad;
    document.body.appendChild(p);
});
