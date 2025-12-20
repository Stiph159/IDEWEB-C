from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class Handler(BaseHTTPRequestHandler):

    def do_POST(self):
        if self.path == "/sumar":
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length)
            data = json.loads(body)

            a = data.get("a", 0)
            b = data.get("b", 0)

            resultado = {"suma": a + b}

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(resultado).encode())
            return

        self.send_response(404)
        self.end_headers()

server = HTTPServer(("localhost", 8000), Handler)
print("Servidor corriendo en http://localhost:8000")
server.serve_forever()
