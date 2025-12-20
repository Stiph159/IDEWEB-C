import json
import os
import mimetypes
from urllib.parse import unquote

equipos = []
next_id = 1

BASE_DIR = os.path.dirname(__file__)
STATIC_DIR = os.path.join(BASE_DIR, "static")

def app(environ, start_response):
    global next_id

    method = environ["REQUEST_METHOD"]
    path = unquote(environ["PATH_INFO"])

    if path.startswith("/static/"):
        file_path = os.path.join(STATIC_DIR, path.replace("/static/", ""))
        if os.path.isfile(file_path):
            content_type = mimetypes.guess_type(file_path)[0] or "application/octet-stream"
            start_response("200 OK", [("Content-Type", content_type)])
            with open(file_path, "rb") as f:
                return [f.read()]
        start_response("404 Not Found", [])
        return [b"Not Found"]

    if path == "/":
        file_path = os.path.join(STATIC_DIR, "index.html")
        start_response("200 OK", [("Content-Type", "text/html; charset=utf-8")])
        with open(file_path, "rb") as f:
            return [f.read()]

    if path == "/equipos" and method == "GET":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(equipos).encode()]

    if path == "/equipos" and method == "POST":
        length = int(environ.get("CONTENT_LENGTH", 0))
        body = environ["wsgi.input"].read(length)
        data = json.loads(body)

        equipo = {
            "id": next_id,
            "nombre": data["nombre"],
            "ciudad": data["ciudad"],
            "nivelAtaque": int(data["nivelAtaque"]),
            "nivelDefensa": int(data["nivelDefensa"])
        }

        equipos.append(equipo)
        next_id += 1

        start_response("201 Created", [("Content-Type", "application/json")])
        return [json.dumps(equipo).encode()]

    if path.startswith("/equipos/") and method == "GET":
        equipo_id = int(path.split("/")[-1])
        for e in equipos:
            if e["id"] == equipo_id:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(e).encode()]
        start_response("404 Not Found", [])
        return [b"Equipo no encontrado"]

    start_response("404 Not Found", [])
    return [b"404"]
