async function cargar() {
    const contenedor = document.getElementById("contenedor");
    let lista = [];

    for (let i = 1; i <= 10; i++) {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        const data = await res.json();
        lista.push(data);
    }

    contenedor.innerHTML = "";

    lista.forEach(p => {
        const card = document.createElement("div");
        card.innerHTML =
        "<h3>" + p.name + "</h3>" +
        "<img src='" + p.sprites.front_default + "'>" +
        "<p>ID: " + p.id + "</p>";
        contenedor.appendChild(card);
    });
}

cargar();
