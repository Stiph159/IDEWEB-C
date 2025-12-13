class Libro:
    def __init__(self, titulo, autor, anio):
        self.titulo = titulo
        self.autor = autor
        self.anio = anio
        self.disponible = True

    def prestar(self):
        if self.disponible:
            self.disponible = False
            return True
        return False

    def devolver(self):
        if not self.disponible:
            self.disponible = True
            return True
        return False


class LibroDigital(Libro):
    def __init__(self, titulo, autor, anio, formato, tamanoMB):
        super().__init__(titulo, autor, anio)
        self.formato = formato
        self.tamanoMB = tamanoMB

    def prestar(self):
        return True
