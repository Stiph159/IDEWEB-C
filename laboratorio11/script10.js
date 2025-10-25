let eleccion = 0;

do {
    eleccion = Number(prompt("menu principal:\n1. calcular estadisticas de n notas\n2. contar numeros pares e impares en un rango\n3. generar una tabla de multiplicar\n4. salir\n\ningrese su opcion:"));

    switch (eleccion) {
        case 1:
            let cantidadNotas = Number(prompt("ingrese la cantidad de notas (n):"));
            if (cantidadNotas <= 0) {
                console.log("cantidad de notas invalida.");
                break;
            }

            let suma = 0;
            let maximo = -Infinity;
            let minimo = Infinity;
            let pares = 0;
            let impares = 0;
            let notas = [];
            
            let i = 0;
            while (i < cantidadNotas) {
                let nota = Number(prompt("ingrese la nota " + (i + 1) + ":"));
                if (nota < 0 || nota > 20) {
                    console.log("nota invalida. debe estar entre 0 y 20.");
                    continue;
                }
                
                suma = suma + nota;
                notas[i] = nota;

                if (nota > maximo) {
                    maximo = nota;
                }
                if (nota < minimo) {
                    minimo = nota;
                }
                
                if (nota % 2 === 0) {
                    pares++;
                } else {
                    impares++;
                }
                i++;
            }

            let promedio = suma / cantidadNotas;
            let encimaPromedio = 0;
            
            i = 0;
            while (i < cantidadNotas) {
                if (notas[i] > promedio) {
                    encimaPromedio++;
                }
                i++;
            }
            
            console.log("estadisticas de las notas:");
            console.log("promedio: " + promedio.toFixed(2));
            console.log("valor maximo: " + maximo);
            console.log("valor minimo: " + minimo);
            console.log("cantidad de pares: " + pares);
            console.log("cantidad de impares: " + impares);
            console.log("cuantos estan por encima del promedio: " + encimaPromedio);
            break;

        case 2:
            let inicio = Number(prompt("ingrese el inicio del rango:"));
            let fin = Number(prompt("ingrese el fin del rango:"));
            
            if (inicio > fin) {
                let temp = inicio;
                inicio = fin;
                fin = temp;
            }
            
            let paresRango = 0;
            let imparesRango = 0;
            
            for (let num = inicio; num <= fin; num++) {
                if (num % 2 === 0) {
                    paresRango++;
                } else {
                    imparesRango++;
                }
            }
            
            console.log("rango de " + inicio + " a " + fin + ":");
            console.log("numeros pares: " + paresRango);
            console.log("numeros impares: " + imparesRango);
            break;

        case 3:
            let numeroTabla = Number(prompt("ingrese el numero para la tabla de multiplicar:"));
            let limite = 12;

            console.log("tabla del " + numeroTabla + ":");
            for (let multiplicador = 1; multiplicador <= limite; multiplicador++) {
                let resultado = numeroTabla * multiplicador;
                console.log(numeroTabla + " x " + multiplicador + " = " + resultado);
            }
            break;

        case 4:
            console.log("saliendo del programa.");
            break;

        default:
            console.log("opcion no reconocida. intente de nuevo.");
            break;
    }

} while (eleccion !== 4);