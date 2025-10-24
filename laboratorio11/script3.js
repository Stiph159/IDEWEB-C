let n = 10;
let npar = 0;
let nimpar = 0;

for(let i = 1; i <= n ; i++ ){
    let nota = Number(prompt("agrega el numero " + i));
    if(nota % 2 == 0){
        npar++;
    }else{
        nimpar++;
    }
}
alert("los numeros pares fueron: " + npar + " y los numeros impares fueron: " + nimpar);
