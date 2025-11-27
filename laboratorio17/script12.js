function tiempoAleatorio() {
    return Math.floor(Math.random() * 700) + 800;
}

function cargarUsuario() {
    return new Promise(res => {
        setTimeout(() => res({ id: 1, nombre: "Juancito" }), tiempoAleatorio());
    });
}

cargarUsuario().then(u => {
    console.log("Usuario cargado: " + u.nombre + " (ID: " + u.id + ")");
});
