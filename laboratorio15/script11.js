document.getElementById("btnEliminar").addEventListener("click", function () {
    const parrafos = document.querySelectorAll("p");

    if (parrafos.length > 0) {
        parrafos[parrafos.length - 1].remove();
    }
});
