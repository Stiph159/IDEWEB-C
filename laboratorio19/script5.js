fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
.then(res => res.json())
.then(data => {
  data.results.forEach(p => console.log(p.name))
})