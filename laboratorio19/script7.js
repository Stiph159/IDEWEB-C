async function buscarPokemon() {
  let id = document.getElementById("pokemonId").value
  let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
  if (!res.ok) {
    document.getElementById("resultado").innerHTML = "Pokemon no encontrado"
    return
  }
  let data = await res.json()
  let habilidades = data.abilities.map(a => a.ability.name).join(", ")
  document.getElementById("resultado").innerHTML = `
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <p>Nombre: ${data.name}</p>
    <p>ID: ${data.id}</p>
    <p>Peso: ${data.weight}</p>
    <p>Altura: ${data.height}</p>
    <p>Habilidades: ${habilidades}</p>
  `
}
