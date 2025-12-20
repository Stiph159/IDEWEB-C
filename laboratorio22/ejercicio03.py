from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class Handler(BaseHTTPRequestHandler):

    def do_GET(self):
        if self.path == "/":
            with open("index.html", "rb") as f:
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                self.wfile.write(f.read())
            return

        if self.path == "/saludo":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"msg": "Hola"}).encode())
            return

        self.send_response(404)
        self.end_headers()

server = HTTPServer(("localhost", 8000), Handler)
print("Servidor corriendo en http://localhost:8000")
server.serve_forever()
