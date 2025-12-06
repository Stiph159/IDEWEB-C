async function buscar() {
    const valor = document.getElementById("entrada").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    if (valor === "") return;

    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + valor);
        if (!res.ok) {
            resultado.innerHTML = "pokemon no encontrado";
            return;
        }

        const data = await res.json();
        const tipos = data.types.map(t => t.type.name).join(", ");

        resultado.innerHTML =
            "<h3>" + data.name + "</h3>" +
            "<img src='" + data.sprites.front_default + "'>" +
            "<p>tipos: " + tipos + "</p>";

    } catch (e) {
        resultado.innerHTML = "error";
    }
}
