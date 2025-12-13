import json

equipos = [
    {
        "Nombre": "Barcelona",
        "Pais": "Espana",
        "nivelAtaque": 85,
        "nivelDefensa": 80
    },
    {
        "Nombre": "Real Madrid",
        "Pais": "Espana",
        "nivelAtaque": 88,
        "nivelDefensa": 82
    },
    {
        "Nombre": "Manchester City",
        "Pais": "Inglaterra",
        "nivelAtaque": 90,
        "nivelDefensa": 85
    }
]

texto_json = json.dumps(equipos, indent=4)

print(texto_json)
