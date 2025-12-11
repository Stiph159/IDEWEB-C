estudiantes = []

while True:
    print("1 agregar estudiante")
    print("2 mostrar estudiantes")
    print("3 mostrar estudiante con mejor promedio")
    print("4 buscar por nombre")
    print("5 eliminar por nombre")
    print("6 salir")
    op = input("opcion: ")

    if op == "1":
        nombre = input("nombre: ")
        edad = int(input("edad: "))
        promedio = float(input("promedio: "))
        est = {"nombre": nombre, "edad": edad, "promedio": promedio}
        estudiantes.append(est)

    elif op == "2":
        for e in estudiantes:
            print(e)

    elif op == "3":
        if estudiantes:
            mejor = max(estudiantes, key=lambda x: x["promedio"])
            print(mejor)

    elif op == "4":
        nom = input("nombre: ")
        for e in estudiantes:
            if e["nombre"] == nom:
                print(e)

    elif op == "5":
        nom = input("nombre: ")
        estudiantes = [e for e in estudiantes if e["nombre"] != nom]

    elif op == "6":
        break
