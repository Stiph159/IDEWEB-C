ingreso = float(input("Ingreso mensual: "))

anual = ingreso * 14
imp1 = 0
imp2 = 0
imp3 = 0
imp4 = 0

if anual > 20000:
    t = min(anual, 50000) - 20000
    imp2 = t * 0.10
if anual > 50000:
    t = min(anual, 100000) - 50000
    imp3 = t * 0.20
if anual > 100000:
    t = anual - 100000
    imp4 = t * 0.30

total = imp1 + imp2 + imp3 + imp4
tasa = (total / anual) * 100

print("Tramo 1:", imp1)
print("Tramo 2:", imp2)
print("Tramo 3:", imp3)
print("Tramo 4:", imp4)
print("Total impuesto:", total)
print("Tasa efectiva:", tasa)
