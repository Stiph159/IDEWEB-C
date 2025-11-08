class figura {
    area() { return 0; }
    perimetro() { return 0; }
}

class cuadrado extends figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    area() { return this.lado * this.lado; }
    perimetro() { return 4 * this.lado; }
}

class triangulo extends figura {
    constructor(base, altura, lado1, lado2, lado3) {
        super();
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    area() { return (this.base * this.altura) / 2; }
    perimetro() { return this.lado1 + this.lado2 + this.lado3; }
}

function menufigura() {
    let opcion = prompt("elige una figura:\n1. cuadrado\n2. triangulo");

    if (opcion == "1") {
        let lado = Number(prompt("ingresa el lado:"));
        let c = new cuadrado(lado);
        console.log("area:", c.area());
        console.log("perimetro:", c.perimetro());
    } 
    else if (opcion == "2") {
        let base = Number(prompt("base:"));
        let altura = Number(prompt("altura:"));
        let l1 = Number(prompt("lado 1:"));
        let l2 = Number(prompt("lado 2:"));
        let l3 = Number(prompt("lado 3:"));
        let t = new triangulo(base, altura, l1, l2, l3);
        console.log("area:", t.area());
        console.log("perimetro:", t.perimetro());
    } 
    else {
        console.log("opcion invalida");
    }
}

menufigura();
