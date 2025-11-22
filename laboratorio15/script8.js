const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Este es un h3 insertado antes del primer párrafo";
const primerParrafo = document.querySelector("p");
document.body.insertBefore(nuevoH3, primerParrafo);
