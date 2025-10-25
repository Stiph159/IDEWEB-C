let eleccion = 0;
const PI = 3.14159;

do {
    eleccion = Number(prompt("ingrese 1. calcular area del circulo 2. calcular area del rectangulo 3. salir:"));

    switch (eleccion) {
        case 1:
            let radio = Number(prompt("ingrese el radio del circulo:"));
            if (radio > 0) {
                let areaCirculo = PI * radio * radio;
                console.log("el area del circulo es: " + areaCirculo);
            } else {
                console.log("radio invalido.");
            }
            break;

        case 2:
            let base = Number(prompt("ingrese la base del rectangulo:"));
            let altura = Number(prompt("ingrese la altura del rectangulo:"));
            if (base > 0 && altura > 0) {
                let areaRectangulo = base * altura;
                console.log("el area del rectangulo es: " + areaRectangulo);
            } else {
                console.log("base o altura invalida.");
            }
            break;

        case 3:
            console.log("saliendo del programa.");
            break;

        default:
            console.log("opcion no reconocida. intente de nuevo.");
            break;
    }

} while (eleccion !== 3);