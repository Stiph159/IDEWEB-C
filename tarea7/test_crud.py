from crud import CRUDUniversidad

crud = CRUDUniversidad()

# CREATE
crud.crear_alumno(
    dni="99999999Z",
    nombre="Test",
    apellido1="Usuario",
    ciudad="Arequipa",
    estado_civil="S"
)

# READ
alumnos = crud.leer_alumnos()
print("Todos los alumnos:", alumnos)

# READ específico
alumno = crud.leer_alumno("11111111A")
print("Alumno específico:", alumno)

# UPDATE
crud.actualizar_alumno("99999999Z", ciudad="Lima", telefono="999888777")

# DELETE
crud.eliminar_alumno("99999999Z")