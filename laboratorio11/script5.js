let retiro = 0;
let b100 = 0;
let b50 = 0 ;
let b20 = 0;
let b10 = 0;
let eleccion = 0;

do {
    b100 = 0;
    b50 = 0;
    b20 = 0;
    b10 = 0;

    eleccion = Number(prompt("1 para retirar, 0 para salir"));
    
    if (eleccion === 1) {
        retiro = Number(prompt("ingrese el monto a retirar"));
        
        let montoParaCalcular = retiro;
        
        while (montoParaCalcular >= 100){
            montoParaCalcular -= 100;
            b100++;
        } 
        while (montoParaCalcular >= 50){
            montoParaCalcular -= 50;
            b50++;
        }
        while (montoParaCalcular >= 20){
            montoParaCalcular -= 20;
            b20++;
        }
        while (montoParaCalcular >= 10){
            montoParaCalcular -= 10;
            b10++;
        }
        
        console.log("billetes de 100: " + b100);
        console.log("billetes de 50: " + b50);
        console.log("billetes de 20: " + b20);
        console.log("billetes de 10: " + b10);
    }
    
} while (eleccion !== 0); 

console.log("gracias por usar el cajero");