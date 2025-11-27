function cargarMensaje() {
    return new Promise(res => {
        setTimeout(() => res("Mensaje cargado"), 1000);
    });
}

cargarMensaje().then(m => console.log(m));
