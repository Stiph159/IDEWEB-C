let lista = [];
let inicio = 0;

async function cargar() {
    for (let i = 1; i <= 12; i++) {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        const data = await res.json();
        lista.push(data);
    }
    mostrar();
}

function mostrar() {
    const cont = document.getElementById("contenedor");
    cont.innerHTML = "";

    const grupo = lista.slice(inicio, inicio + 3);

    grupo.forEach(p => {
        const card = document.createElement("div");
        card.innerHTML =
            "<h3>" + p.name + "</h3>" +
            "<img src='" + p.sprites.front_default + "'>" +
            "<p>ID: " + p.id + "</p>";
        cont.appendChild(card);
    });
}

document.getElementById("siguiente").onclick = function() {
    if (inicio + 3 < lista.length) {
        inicio += 3;
        mostrar();
    }
};

document.getElementById("anterior").onclick = function() {
    if (inicio - 3 >= 0) {
        inicio -= 3;
        mostrar();
    }
};

cargar();
