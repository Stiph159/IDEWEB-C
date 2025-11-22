const lista = document.getElementById("lista");

lista.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});
