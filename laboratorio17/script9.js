function dividirAsync(a, b, callback) {
    setTimeout(() => {
        if (b === 0) callback(new Error("No se puede dividir entre cero"), null);
        else callback(null, a / b);
    }, 1500);
}

document.getElementById("go").onclick = () => {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);

    dividirAsync(a, b, (err, res) => {
        document.getElementById("out").textContent =
            err ? err.message : res;
    });
};
