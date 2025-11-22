const cont = document.getElementById("contenedor");

for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = "Párrafo " + i;
    cont.appendChild(p);
}

const segundo = cont.querySelectorAll("p")[1];
cont.removeChild(segundo);
