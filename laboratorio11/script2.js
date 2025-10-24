let edad = Number(prompt("ingrese su edad"));

if (edad < 12){
    alert("niño");
}else if (edad <= 17){
    alert("Adolescente");
}else if (edad <= 59){
    alert("Adulto");
}else{
    alert("Adulto mayor")
}