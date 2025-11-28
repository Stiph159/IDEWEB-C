const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function validarContrasena(pw) {
  return regex.test(pw);
}

console.log(validarContrasena("Abcdef12")); 
console.log(validarContrasena("abcdef12")); 
console.log(validarContrasena("ABCDEF12")); 
console.log(validarContrasena("Abcdefgh")); 
console.log(validarContrasena("A1b2C3"));   
