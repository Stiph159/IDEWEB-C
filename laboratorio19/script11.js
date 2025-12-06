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

        let lista = "<ul>";
        data.stats.forEach(s => {
            lista += "<li>" + s.stat.name + ": " + s.base_stat + "</li>";
        });
        lista += "</ul>";

        resultado.innerHTML =
            "<h3>" + data.name + "</h3>" +
            "<img src='" + data.sprites.front_default + "'>" +
            lista;

    } catch (e) {
        resultado.innerHTML = "error";
    }
}
