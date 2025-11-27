function dividirAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            b === 0 ? rej(new Error("No se puede dividir entre cero")) : res(a / b);
        }, 1500);
    });
}

async function ejecutar() {
    try {
        console.log("Resultado:", await dividirAsync(10, 2));
    } catch (e) {
        console.log("Error:", e.message);
    }
}

ejecutar();
