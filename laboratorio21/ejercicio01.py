from libro import Libro, LibroDigital
from biblioteca import Biblioteca

biblioteca = Biblioteca()

libro1 = Libro("El Quijote", "Cervantes", 1605)
libro2 = Libro("Cien Anos de Soledad", "Garcia Marquez", 1967)
libro3 = Libro("La Ciudad y los Perros", "Vargas Llosa", 1963)

digital1 = LibroDigital("Python Basico", "Autor Uno", 2020, "PDF", 5)
digital2 = LibroDigital("Diseno Web", "Autor Dos", 2021, "EPUB", 3)

biblioteca.agregar_libro(libro1)
biblioteca.agregar_libro(libro2)
biblioteca.agregar_libro(libro3)
biblioteca.agregar_libro(digital1)
biblioteca.agregar_libro(digital2)

print("LISTAR LIBROS")
biblioteca.listar_libros()

print("PRESTAR LIBRO FISICO")
biblioteca.prestar_libro("El Quijote")

print("PRESTAR LIBRO DIGITAL 5 VECES")
for i in range(5):
    biblioteca.prestar_libro("Python Basico")

print("INTENTAR PRESTAR LIBRO YA PRESTADO")
biblioteca.prestar_libro("El Quijote")

print("BUSCAR POR AUTOR")
biblioteca.buscar_por_autor("Vargas Llosa")
