function procesarLista(lista) {
    return new Promise(res => {
        let c = 0;
        lista.forEach(n => {
            const t = Math.floor(Math.random() * 1000) + 500;
            setTimeout(() => {
                console.log("Procesando " + n + "...");
                if (++c === lista.length) res("Proceso completado");
            }, t);
        });
    });
}

procesarLista([1, 2, 3]).then(m => console.log(m));
