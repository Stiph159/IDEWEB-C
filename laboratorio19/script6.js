let id = Math.floor(Math.random() * 898) + 1

fetch("https://pokeapi.co/api/v2/pokemon/" + id)
.then(res => res.json())
.then(data => {
  console.log("ID:", id)
  console.log("Nombre:", data.name)
})
