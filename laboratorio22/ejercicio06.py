from wsgiref.simple_server import make_server
from app import app

server = make_server("localhost", 8000, app)
print("Servidor WSGI corriendo en http://localhost:8000")
server.serve_forever()
