class producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class carrito {
    constructor() {
        this.productos = [];
    }

    agregarproducto(nombre, precio) {
        this.productos.push(new producto(nombre, precio));
    }

    calculartotal() {
        return this.productos.reduce((total, p) => total + p.precio, 0);
    }

    mostrarresumen() {
        console.log("productos en el carrito:");
        this.productos.forEach(p => console.log(p.nombre + " - $" + p.precio));
        console.log("total:", this.calculartotal());
    }
}

function menucarrito() {
    let c = new carrito();
    let cantidad = Number(prompt("cuantos productos deseas agregar:"));

    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt("nombre del producto:");
        let precio = Number(prompt("precio del producto:"));
        c.agregarproducto(nombre, precio);
    }

    c.mostrarresumen();
}

menucarrito();
