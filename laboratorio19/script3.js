async function datosPikachu() {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  let data = await res.json()
  console.log("Altura:", data.height)
  console.log("Peso:", data.weight)
}

datosPikachu()
