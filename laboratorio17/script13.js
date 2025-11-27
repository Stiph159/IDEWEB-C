function dividirAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            b === 0 ? rej(new Error("No se puede dividir entre cero")) : res(a / b);
        }, 1500);
    });
}

dividirAsync(10, 2)
    .then(r => console.log("Resultado:", r))
    .catch(e => console.log("Error:", e.message));
