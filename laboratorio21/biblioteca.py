class Biblioteca:
    def __init__(self):
        self.libros = []

    def agregar_libro(self, libro):
        self.libros.append(libro)

    def listar_libros(self):
        for libro in self.libros:
            estado = "Disponible" if libro.disponible else "Prestado"
            print(libro.titulo, "-", libro.autor, "-", estado)

    def buscar_por_autor(self, autor):
        for libro in self.libros:
            if libro.autor == autor:
                print(libro.titulo, "-", libro.anio)

    def prestar_libro(self, titulo):
        for libro in self.libros:
            if libro.titulo == titulo:
                if libro.prestar():
                    print("Libro prestado:", titulo)
                else:
                    print("Libro no disponible:", titulo)
                return
        print("Libro no encontrado:", titulo)
