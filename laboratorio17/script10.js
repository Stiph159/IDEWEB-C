function procesarLista(lista, callback) {
    let p = 0;
    lista.forEach(n => {
        const t = Math.floor(Math.random() * 1000) + 500;
        setTimeout(() => {
            console.log("Procesando " + n + "...");
            p++;
            if (p === lista.length) callback("Proceso completado");
        }, t);
    });
}

procesarLista([3, 7, 1], m => console.log(m));
