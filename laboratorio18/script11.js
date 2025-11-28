const regex = /<[^>]*>/g;

function quitarEtiquetas(texto) {
  return texto.replace(regex, "");
}

console.log(quitarEtiquetas("<h1>Hola</h1>"));  
console.log(quitarEtiquetas("<p>Esto es <b>importante</b></p>"));
console.log(quitarEtiquetas("<div><span>Texto</span> dentro</div>"));
