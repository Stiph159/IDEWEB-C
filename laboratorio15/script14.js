document.getElementById("btnMover").addEventListener("click", () => {
    const ul = document.querySelector("ul");
    const ultimo = ul.lastElementChild;
    ul.insertBefore(ultimo, ul.firstElementChild);
});
