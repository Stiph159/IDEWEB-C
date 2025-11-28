const regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

function validarFecha(fecha) {
  return regexFecha.test(fecha);
}

console.log(validarFecha("25/12/2024")); 
console.log(validarFecha("01/01/1999"));
console.log(validarFecha("32/12/2024")); 
console.log(validarFecha("10/13/2024")); 
console.log(validarFecha("5/12/2024"));  
