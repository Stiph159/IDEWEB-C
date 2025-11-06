function Contraseña (){
    let resultado = "";
    let i = 0;
    while(i < 6){
        let numero = Math.floor( Math.random() * 10 );
        resultado += numero;
        i++;
    }
    return resultado;
}
console.log("tu contraseña es: " + Contraseña());
