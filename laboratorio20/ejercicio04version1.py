def normalizar(lista, modo):
    if modo not in ["minmax", "zscore", "unit"]:
        return []

    a = lista[:]
    n = len(a)

    if modo == "minmax":
        mn = min(a)
        mx = max(a)
        if mx - mn == 0:
            return [0]*n
        return [(x - mn) / (mx - mn) for x in a]

    if modo == "zscore":
        media = sum(a) / n
        var = sum((x - media)**2 for x in a) / n
        des = var**0.5
        if des == 0:
            return [0]*n
        return [(x - media) / des for x in a]

    if modo == "unit":
        norma = sum(x*x for x in a)**0.5
        if norma == 0:
            return [0]*n
        return [x / norma for x in a]


valores = [10, 20, 30]
print(normalizar(valores, "minmax"))
print(normalizar(valores, "zscore"))
print(normalizar(valores, "unit"))
print("Original:", valores)
