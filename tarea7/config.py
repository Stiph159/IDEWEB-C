import mysql.connector

def conectar():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="admin",  # tu contraseña si la tienes
        database="universidad"
    )