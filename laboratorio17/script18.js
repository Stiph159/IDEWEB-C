function procesarNumero(n) {
    const t = Math.floor(Math.random() * 1000) + 500;
    return new Promise(res => {
        setTimeout(() => {
            console.log("Procesando " + n + "...");
            res();
        }, t);
    });
}

async function procesarLista(lista) {
    for (let x of lista) await procesarNumero(x);
    return "Proceso completado";
}

async function ejecutar() {
    console.log(await procesarLista([1, 2, 3]));
}

ejecutar();
