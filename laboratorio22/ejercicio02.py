import requests

print("Iniciando programa...")

url = "https://pokeapi.co/api/v2/pokemon?limit=10"
r = requests.get(url)

print("Status code:", r.status_code)

data = r.json()

print("Pokémon:")
for pokemon in data["results"]:
    print(pokemon["name"])
