async function buscarPokemon() {
  let id = prompt("Ingresa un ID de Pokemon");
  let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  let data = await res.json();
  console.log(data.name);
}

buscarPokemon();
