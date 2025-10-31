function filtrarYTransformar(arr) {
    let positivos = arr.filter(function(num) {
        return num >= 0;
    });
    let cuadrados = positivos.map(function(num) {
        return num ** 2;
    });
    let sumaTotal = cuadrados.reduce(function(acum, num) {
        return acum + num;
    }, 0);
    return sumaTotal;
}
console.log(filtrarYTransformar([2, -3, 4, -1, 5]));