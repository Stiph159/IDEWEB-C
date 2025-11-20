const parrafos = document.querySelectorAll("p");

parrafos.forEach(p => {
    p.textContent = "Texto actualizado dinamicamente";
});
