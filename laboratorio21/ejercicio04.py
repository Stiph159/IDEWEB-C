from figuras import Rectangulo, Triangulo, Circulo

figuras = []

rectangulo = Rectangulo(4, 6)
triangulo = Triangulo(5, 4, 5, 5)
circulo = Circulo(3)

figuras.append(rectangulo)
figuras.append(triangulo)
figuras.append(circulo)

for figura in figuras:
    figura.mostrar_datos()
    print("-----")
