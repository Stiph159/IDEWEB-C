function NumAleatorio (){
    let dado1 = Math.floor( Math.random() * 6 ) + 1;
    let dado2 = Math.floor( Math.random() * 6 ) + 1;
    return dado1 + dado2;
}
console.log("suma de dados: " + NumAleatorio());