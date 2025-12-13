import time
import random
import threading
import asyncio
import multiprocessing


def consulta(nombre):
    tiempo = random.randint(1, 5)
    print("Iniciando consulta", nombre)
    time.sleep(tiempo)
    print("Finalizo consulta", nombre, "en", tiempo, "segundos")


def version_hilos():
    print("VERSION HILOS")
    inicio = time.time()
    hilos = []

    for i in range(3):
        h = threading.Thread(target=consulta, args=(i + 1,))
        h.start()
        hilos.append(h)

    for h in hilos:
        h.join()

    print("Tiempo total:", time.time() - inicio)
    print("-----")


async def consulta_async(nombre):
    tiempo = random.randint(1, 5)
    print("Iniciando consulta", nombre)
    await asyncio.sleep(tiempo)
    print("Finalizo consulta", nombre, "en", tiempo, "segundos")


async def version_asyncio():
    print("VERSION ASYNCIO")
    inicio = time.time()

    await asyncio.gather(
        consulta_async(1),
        consulta_async(2),
        consulta_async(3)
    )

    print("Tiempo total:", time.time() - inicio)
    print("-----")


def version_procesos():
    print("VERSION PROCESOS")
    inicio = time.time()
    procesos = []

    for i in range(3):
        p = multiprocessing.Process(target=consulta, args=(i + 1,))
        p.start()
        procesos.append(p)

    for p in procesos:
        p.join()

    print("Tiempo total:", time.time() - inicio)
    print("-----")


if __name__ == "__main__":
    version_hilos()
    asyncio.run(version_asyncio())
    version_procesos()
