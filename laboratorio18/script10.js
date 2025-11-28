const regex = /https:\/\/[^\s]+/g;

function encontrarURLs(texto) {
  return texto.match(regex);
}

const textoPrueba = `
Visita https://google.com y https://example.com/secure
pero http://facebook.com no es seguro.
`;

console.log(encontrarURLs(textoPrueba));
