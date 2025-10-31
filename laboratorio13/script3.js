function reordenarPalabras(oracion) {
    let palabras = oracion.split(" ");
    let mayusculas = palabras.map(function(palabra) {
        return palabra.toUpperCase();
    });
    let ordenadas = mayusculas.sort();
    return ordenadas;
}
let texto = "Esta prueba es de javascript";
let resultado = reordenarPalabras(texto);
console.log(resultado); 