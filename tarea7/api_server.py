from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import json
from crud import CRUDUniversidad

class APIHandler(BaseHTTPRequestHandler):
    
    def _set_headers(self, status=200):
        self.send_response(status)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
    
    def _read_json_body(self):
        content_length = int(self.headers.get('Content-Length', 0))
        if content_length > 0:
            body = self.rfile.read(content_length)
            return json.loads(body.decode('utf-8'))
        return {}
    
    def do_GET(self):
        parsed = urlparse(self.path)
        
        if parsed.path == '/alumnos':
            crud = CRUDUniversidad()
            query = parse_qs(parsed.query)
            
            if 'id' in query:
                dni = query['id'][0]
                alumno = crud.leer_alumno(dni)
                
                if alumno:
                    if alumno.get('fecha_nacimiento'):
                        alumno['fecha_nacimiento'] = alumno['fecha_nacimiento'].isoformat()
                    
                    self._set_headers(200)
                    response = json.dumps(alumno)
                else:
                    self._set_headers(404)
                    response = json.dumps({"error": "Alumno no encontrado"})
            
            else:
                alumnos = crud.leer_alumnos()
                
                for a in alumnos:
                    if a.get('fecha_nacimiento'):
                        a['fecha_nacimiento'] = a['fecha_nacimiento'].isoformat()
                
                self._set_headers(200)
                response = json.dumps(alumnos)
            
            self.wfile.write(response.encode())
        
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({"error": "Ruta no encontrada"}).encode())
    
    def do_POST(self):
        if self.path == '/alumnos':
            try:
                datos = self._read_json_body()
                crud = CRUDUniversidad()
                
                if not all(k in datos for k in ['dni', 'nombre', 'primer_apellido']):
                    self._set_headers(400)
                    self.wfile.write(json.dumps({
                        "error": "Faltan campos: dni, nombre, primer_apellido"
                    }).encode())
                    return
                
                if crud.crear_alumno(datos):
                    self._set_headers(201)  # 201 Created
                    self.wfile.write(json.dumps({
                        "mensaje": "Alumno creado",
                        "dni": datos['dni']
                    }).encode())
                else:
                    self._set_headers(400)
                    self.wfile.write(json.dumps({
                        "error": "No se pudo crear alumno"
                    }).encode())
                    
            except json.JSONDecodeError:
                self._set_headers(400)
                self.wfile.write(json.dumps({"error": "JSON inválido"}).encode())
        
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({"error": "Ruta no encontrada"}).encode())
    
    def do_PUT(self):
        if self.path == '/alumnos':
            try:
                datos = self._read_json_body()
                crud = CRUDUniversidad()
                
                if 'dni' not in datos:
                    self._set_headers(400)
                    self.wfile.write(json.dumps({
                        "error": "Se requiere campo 'dni'"
                    }).encode())
                    return
                
                if crud.actualizar_alumno(datos['dni'], datos):
                    self._set_headers(200)
                    self.wfile.write(json.dumps({
                        "mensaje": "Alumno actualizado"
                    }).encode())
                else:
                    self._set_headers(400)
                    self.wfile.write(json.dumps({
                        "error": "No se pudo actualizar"
                    }).encode())
                    
            except json.JSONDecodeError:
                self._set_headers(400)
                self.wfile.write(json.dumps({"error": "JSON inválido"}).encode())
        
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({"error": "Ruta no encontrada"}).encode())
    
    def do_DELETE(self):
        parsed = urlparse(self.path)
        
        if parsed.path == '/alumnos':
            query = parse_qs(parsed.query)
            crud = CRUDUniversidad()
            
            if 'id' in query:
                dni = query['id'][0]
                
                if crud.eliminar_alumno(dni):
                    self._set_headers(200)
                    self.wfile.write(json.dumps({
                        "mensaje": f"Alumno {dni} eliminado"
                    }).encode())
                else:
                    self._set_headers(404)
                    self.wfile.write(json.dumps({
                        "error": "Alumno no encontrado"
                    }).encode())
            else:
                self._set_headers(400)
                self.wfile.write(json.dumps({
                    "error": "Se requiere parámetro 'id'"
                }).encode())
        
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({"error": "Ruta no encontrada"}).encode())

def run_server(port=8000):
    server = HTTPServer(('localhost', port), APIHandler)
    print(f"✅ Servidor API en http://localhost:{port}")
    print("📡 Endpoints:")
    print("  GET    /alumnos           → Lista todos")
    print("  GET    /alumnos?id=DNI    → Busca por DNI")
    print("  POST   /alumnos           → Crea (JSON)")
    print("  PUT    /alumnos           → Actualiza (JSON)")
    print("  DELETE /alumnos?id=DNI    → Elimina")
    print("\nCtrl+C para detener")
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n⏹️ Servidor detenido")

if __name__ == '__main__':
    run_server()