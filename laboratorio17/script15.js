function cargarMensaje() {
    return new Promise(res => {
        setTimeout(() => res("Mensaje cargado"), 1000);
    });
}

async function ejecutar() {
    console.log(await cargarMensaje());
}

ejecutar();
