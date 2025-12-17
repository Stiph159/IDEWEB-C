from wsgiref.simple_server import make_server
from urllib.parse import parse_qs
import json
from crud import CRUDUniversidad

def application(environ, start_response):
    path = environ.get('PATH_INFO', '')
    method = environ.get('REQUEST_METHOD', 'GET')
    
    print(f"📡 {method} {path}")  # Para depurar
    
    # Configurar headers
    headers = [
        ('Content-Type', 'application/json'),
        ('Access-Control-Allow-Origin', '*'),
        ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'),
        ('Access-Control-Allow-Headers', 'Content-Type')
    ]
    
    # Manejar OPTIONS para CORS
    if method == 'OPTIONS':
        start_response('200 OK', headers)
        return []
    
    crud = CRUDUniversidad()
    
    # GET /alumnos
    if path == '/alumnos' and method == 'GET':
        query_string = environ.get('QUERY_STRING', '')
        params = parse_qs(query_string)
        
        if 'id' in params:
            dni = params['id'][0]
            alumno = crud.leer_alumno(dni)
            if alumno:
                # Convertir fecha para JSON
                if alumno.get('fecha_nacimiento'):
                    alumno['fecha_nacimiento'] = alumno['fecha_nacimiento'].isoformat()
                response_data = json.dumps(alumno)
                start_response('200 OK', headers)
            else:
                response_data = json.dumps({"error": "Alumno no encontrado"})
                start_response('404 Not Found', headers)
        else:
            alumnos = crud.leer_alumnos()
            # Convertir fechas
            for a in alumnos:
                if a.get('fecha_nacimiento'):
                    a['fecha_nacimiento'] = a['fecha_nacimiento'].isoformat()
            response_data = json.dumps(alumnos)
            start_response('200 OK', headers)
        
        return [response_data.encode('utf-8')]
    
    # POST /alumnos
    elif path == '/alumnos' and method == 'POST':
        try:
            content_length = int(environ.get('CONTENT_LENGTH', 0))
            body = environ['wsgi.input'].read(content_length)
            datos = json.loads(body.decode('utf-8'))
            
            print(f"📝 Creando alumno: {datos['dni']}")
            
            if crud.crear_alumno(datos):
                response_data = json.dumps({
                    "mensaje": "Alumno creado",
                    "dni": datos['dni']
                })
                start_response('201 Created', headers)
            else:
                response_data = json.dumps({"error": "Error al crear alumno"})
                start_response('400 Bad Request', headers)
                
        except Exception as e:
            print(f"❌ Error en POST: {e}")
            response_data = json.dumps({"error": "JSON inválido"})
            start_response('400 Bad Request', headers)
        
        return [response_data.encode('utf-8')]
    
    # PUT /alumnos
    elif path == '/alumnos' and method == 'PUT':
        try:
            content_length = int(environ.get('CONTENT_LENGTH', 0))
            body = environ['wsgi.input'].read(content_length)
            datos = json.loads(body.decode('utf-8'))
            
            print(f"✏️ Actualizando alumno: {datos.get('dni')}")
            
            if 'dni' not in datos:
                response_data = json.dumps({"error": "Se requiere campo 'dni'"})
                start_response('400 Bad Request', headers)
            elif crud.actualizar_alumno(datos['dni'], datos):
                response_data = json.dumps({"mensaje": "Alumno actualizado"})
                start_response('200 OK', headers)
            else:
                response_data = json.dumps({"error": "Error al actualizar"})
                start_response('400 Bad Request', headers)
                
        except Exception as e:
            print(f"❌ Error en PUT: {e}")
            response_data = json.dumps({"error": "JSON inválido"})
            start_response('400 Bad Request', headers)
        
        return [response_data.encode('utf-8')]
    
    # DELETE /alumnos
    elif path == '/alumnos' and method == 'DELETE':
        try:
            query_string = environ.get('QUERY_STRING', '')
            params = parse_qs(query_string)
            
            print(f"🗑️ DELETE query: {query_string}")
            print(f"🗑️ DELETE params: {params}")
            
            if 'id' in params:
                dni = params['id'][0]
                print(f"🗑️ Eliminando alumno: {dni}")
                
                if crud.eliminar_alumno(dni):
                    response_data = json.dumps({"mensaje": f"Alumno {dni} eliminado"})
                    start_response('200 OK', headers)
                else:
                    response_data = json.dumps({"error": "Alumno no encontrado"})
                    start_response('404 Not Found', headers)
            else:
                response_data = json.dumps({"error": "Se requiere parámetro 'id'"})
                start_response('400 Bad Request', headers)
                
        except Exception as e:
            print(f"❌ Error en DELETE: {e}")
            response_data = json.dumps({"error": "Error en servidor"})
            start_response('500 Internal Server Error', headers)
        
        return [response_data.encode('utf-8')]
    
    # Ruta no encontrada
    else:
        response_data = json.dumps({"error": f"Ruta no encontrada: {path}"})
        start_response('404 Not Found', headers)
        return [response_data.encode('utf-8')]

if __name__ == '__main__':
    port = 8000
    server = make_server('localhost', port, application)
    print(f"✅ Servidor WSGI en http://localhost:{port}")
    print("📡 Endpoints:")
    print("  GET    /alumnos           → Lista todos")
    print("  GET    /alumnos?id=DNI    → Busca por DNI")
    print("  POST   /alumnos           → Crea (JSON)")
    print("  PUT    /alumnos           → Actualiza (JSON)")
    print("  DELETE /alumnos?id=DNI    → Elimina")
    print("\n📝 Logs aparecerán aquí:")
    print("-" * 40)
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n⏹️ Servidor detenido")