import numpy as np

def normalizar(lista, modo):
    if modo not in ["minmax", "zscore", "unit"]:
        return []

    a = np.array(lista, dtype=float)

    if modo == "minmax":
        mn = a.min()
        mx = a.max()
        if mx - mn == 0:
            return [0]*len(a)
        return list((a - mn) / (mx - mn))

    if modo == "zscore":
        media = a.mean()
        des = a.std()
        if des == 0:
            return [0]*len(a)
        return list((a - media) / des)

    if modo == "unit":
        norma = np.linalg.norm(a)
        if norma == 0:
            return [0]*len(a)
        return list(a / norma)


valores = [10, 20, 30]
print(normalizar(valores, "minmax"))
print(normalizar(valores, "zscore"))
print(normalizar(valores, "unit"))
print("Original:", valores)
