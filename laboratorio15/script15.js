document.getElementById("btnOrdenar").addEventListener("click", () => {
    const cont = document.getElementById("contenedor");
    const arr = Array.from(cont.querySelectorAll("p"));
    arr.sort((a, b) => a.textContent.localeCompare(b.textContent));
    arr.forEach(p => cont.appendChild(p));
});
