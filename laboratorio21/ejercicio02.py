from figuras import Rectangulo, Triangulo, Circulo

figuras = []

rectangulo = Rectangulo(5, 3)
triangulo = Triangulo(4, 3, 5, 5)
circulo = Circulo(2)

figuras.append(rectangulo)
figuras.append(triangulo)
figuras.append(circulo)

for figura in figuras:
    figura.mostrar_datos()
    print("-----")
