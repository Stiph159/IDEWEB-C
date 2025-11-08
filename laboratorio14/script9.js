class Producto {
    #nombre; #precio; #stock;
    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    set precio(v) { if (v > 0) this.#precio = v; else console.log("Precio inválido"); }
    set stock(v) { if (v >= 0) this.#stock = v; else console.log("Stock inválido"); }
    get precio() { return this.#precio; }
    get stock() { return this.#stock; }
    vender(c) {
        if (c <= this.#stock) {
            this.#stock -= c;
            console.log("Venta realizada. Stock restante:", this.#stock);
        } else console.log("Stock insuficiente");
    }
}

function controlInventario() {
    let nombre = prompt("Nombre del producto:");
    let precio = Number(prompt("Precio del producto:"));
    let stock = Number(prompt("Stock inicial:"));
    let producto = new Producto(nombre, precio, stock);
    let cantidad = Number(prompt("¿Cuántas unidades deseas vender?"));
    producto.vender(cantidad);
}

controlInventario();
