def copiar_texto(origen, destino):
    with open(origen, "r") as f_origen:
        contenido = f_origen.read()

    with open(destino, "w") as f_destino:
        f_destino.write(contenido)


def copiar_binario(origen, destino):
    with open(origen, "rb") as f_origen:
        datos = f_origen.read()

    with open(destino, "wb") as f_destino:
        f_destino.write(datos)


copiar_texto(
    "c:/Users/Stiph/Documents/IDEWEB-C/laboratorio21/origen.txt",
    "c:/Users/Stiph/Documents/IDEWEB-C/laboratorio21/destino.txt"
)

copiar_binario(
    "c:/Users/Stiph/Documents/IDEWEB-C/laboratorio21/imagen.jpg",
    "c:/Users/Stiph/Documents/IDEWEB-C/laboratorio21/imagen_copia.jpg"
)
