from urllib.request import Request, urlopen
from urllib.parse import urlencode
import json

BASE = "http://localhost:8000"

print("=== PRUEBAS API (solo módulos estándar) ===")

# 1. GET todos los alumnos
print("\n1. GET /alumnos")
req = Request(f"{BASE}/alumnos")
response = urlopen(req)
data = json.load(response.read().decode())
print(f"Status: {response.status}")
print(f"Total: {len(data)} alumnos")

# 2. GET alumno específico
print("\n2. GET /alumnos?id=11111111A")
req = Request(f"{BASE}/alumnos?id=11111111A")
response = urlopen(req)
data = json.loads(response.read().decode())
print(f"Status: {response.status}")
print(f"Alumno: {data['nombre']} {data['primer_apellido']}")

# 3. POST crear alumno
print("\n3. POST /alumnos")
nuevo = {
    "dni": "88888888Y",
    "nombre": "API",
    "primer_apellido": "Test",
    "ciudad": "Arequipa"
}
req = Request(
    f"{BASE}/alumnos",
    data=json.dumps(nuevo).encode(),
    method='POST',
    headers={'Content-Type': 'application/json'}
)
response = urlopen(req)
print(f"Status: {response.status}")
print(f"Respuesta: {json.loads(response.read().decode())}")

# 4. PUT actualizar
print("\n4. PUT /alumnos")
actualizar = {
    "dni": "88888888Y",
    "nombre": "Actualizado",
    "ciudad": "Lima"
}
req = Request(
    f"{BASE}/alumnos",
    data=json.dumps(actualizar).encode(),
    method='PUT',
    headers={'Content-Type': 'application/json'}
)
response = urlopen(req)
print(f"Status: {response.status}")
print(f"Respuesta: {json.loads(response.read().decode())}")

# 5. DELETE eliminar
print("\n5. DELETE /alumnos?id=88888888Y")
req = Request(
    f"{BASE}/alumnos?id=88888888Y",
    method='DELETE'
)
response = urlopen(req)
print(f"Status: {response.status}")
print(f"Respuesta: {json.loads(response.read().decode())}")

print("\n✅ Todas las pruebas completadas")