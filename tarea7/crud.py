from config import conectar  # ¡IMPORTANTE! Agregar esto

class CRUDUniversidad:
    
    def crear_alumno(self, datos):
        conexion = conectar()
        cursor = conexion.cursor()
        try:
            sql = """INSERT INTO alumno (dni, nombre, primer_apellido, segundo_apellido, 
                    ciudad, telefono) VALUES (%s, %s, %s, %s, %s, %s)"""
            
            valores = (
                datos.get('dni'),
                datos.get('nombre'),
                datos.get('primer_apellido'),
                datos.get('segundo_apellido'),
                datos.get('ciudad'),
                datos.get('telefono')
            )
            
            cursor.execute(sql, valores)
            conexion.commit()
            print(f"✅ Alumno {datos['dni']} creado")
            return True
        except Exception as e:
            print(f"❌ Error crear: {e}")
            return False
        finally:
            cursor.close()
            conexion.close()
    
    def leer_alumnos(self):
        conexion = conectar()
        cursor = conexion.cursor(dictionary=True)
        try:
            cursor.execute("SELECT * FROM alumno")
            return cursor.fetchall()
        finally:
            cursor.close()
            conexion.close()
    
    def leer_alumno(self, dni):
        conexion = conectar()
        cursor = conexion.cursor(dictionary=True)
        try:
            cursor.execute("SELECT * FROM alumno WHERE dni = %s", (dni,))
            return cursor.fetchone()
        finally:
            cursor.close()
            conexion.close()
    
    def actualizar_alumno(self, dni, datos):
        conexion = conectar()
        cursor = conexion.cursor()
        try:
            set_parts = []
            valores = []
            
            for campo, valor in datos.items():
                if valor is not None and campo != 'dni':
                    set_parts.append(f"{campo} = %s")
                    valores.append(valor)
            
            if not set_parts:
                return False
            
            valores.append(dni)
            sql = f"UPDATE alumno SET {', '.join(set_parts)} WHERE dni = %s"
            
            cursor.execute(sql, valores)
            conexion.commit()
            print(f"✅ Alumno {dni} actualizado")
            return cursor.rowcount > 0
        except Exception as e:
            print(f"❌ Error actualizar: {e}")
            return False
        finally:
            cursor.close()
            conexion.close()
    
    def eliminar_alumno(self, dni):
        conexion = conectar()
        cursor = conexion.cursor()
        try:
            # PRIMERO: Eliminar matrículas del alumno
            cursor.execute("DELETE FROM matricula WHERE dni_alumno = %s", (dni,))
            matriculas_eliminadas = cursor.rowcount
            print(f"✅ Matrículas eliminadas: {matriculas_eliminadas}")
            
            # LUEGO: Eliminar el alumno
            sql = "DELETE FROM alumno WHERE dni = %s"
            cursor.execute(sql, (dni,))
            conexion.commit()
            
            eliminado = cursor.rowcount > 0
            if eliminado:
                print(f"✅ Alumno {dni} eliminado")
            else:
                print(f"⚠️ Alumno {dni} no encontrado")
            
            return eliminado
        except Exception as e:
            print(f"❌ Error al eliminar: {e}")
            conexion.rollback()
            return False
        finally:
            cursor.close()
            conexion.close()