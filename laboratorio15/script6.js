const colores = ["red", "blue", "green", "purple"];
const divs = document.querySelectorAll("div.caja");

for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = colores[i];
}
