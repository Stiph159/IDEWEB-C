class empleado {
    constructor(nombre, sueldobase) {
        this.nombre = nombre;
        this.sueldobase = sueldobase;
    }

    calcularsueldo() {
        return this.sueldobase;
    }
}

class programador extends empleado {
    constructor(nombre, sueldobase, lenguaje) {
        super(nombre, sueldobase);
        this.lenguaje = lenguaje;
    }

    calcularsueldo() {
        return this.sueldobase * 1.10;
    }
}

class programadorsenior extends programador {
    constructor(nombre, sueldobase, lenguaje) {
        super(nombre, sueldobase, lenguaje);
    }

    calcularsueldo() {
        return super.calcularsueldo() * 1.25 / 1.10; 
    }
}

function menuempleado() {
    let opcion = prompt("elige tipo de empleado:\n1. programador\n2. programador senior");
    let nombre = prompt("nombre:");
    let sueldobase = Number(prompt("sueldo base:"));
    let lenguaje = prompt("lenguaje de programacion:");

    if (opcion == "1") {
        let p = new programador(nombre, sueldobase, lenguaje);
        console.log("empleado:", p.nombre);
        console.log("lenguaje:", p.lenguaje);
        console.log("sueldo total:", p.calcularsueldo());
    } 
    else if (opcion == "2") {
        let ps = new programadorsenior(nombre, sueldobase, lenguaje);
        console.log("empleado:", ps.nombre);
        console.log("lenguaje:", ps.lenguaje);
        console.log("sueldo total:", ps.calcularsueldo());
    } 
    else {
        console.log("opcion invalida");
    }
}

menuempleado();
