let n = 5;
let promedio = 0;

for(let i = 1; i <= n ; i++ ){
    let nota = Number(prompt("agrega tu nota " + i));
    if(nota >= 0 && nota <= 20){
        promedio =+ nota;
    }else{
        alert("error ingresao");
        break;
    }
}
alert("el promedio es: " + promedio);
