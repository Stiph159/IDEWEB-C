from operador_invalido import OperadorInvalido

operacion = input("Ingrese operacion: ")

try:
    partes = operacion.split()

    if len(partes) != 3:
        raise ValueError("Formato incorrecto")

    num1_str, operador, num2_str = partes

    num1 = float(num1_str)
    num2 = float(num2_str)

    if operador not in ["+", "-", "*", "/"]:
        raise OperadorInvalido("Operador invalido")

    if operador == "+":
        resultado = num1 + num2
    elif operador == "-":
        resultado = num1 - num2
    elif operador == "*":
        resultado = num1 * num2
    elif operador == "/":
        if num2 == 0:
            raise ZeroDivisionError
        resultado = num1 / num2

    print("Resultado:", resultado)

except ZeroDivisionError:
    print("Error: no se puede dividir entre cero")
except ValueError:
    print("Error: valores invalidos")
except OperadorInvalido as e:
    print("Error:", e)
