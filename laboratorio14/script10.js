class Producto {
    #nombre; #precio; #stock;
    constructor(n, p, s) { this.#nombre = n; this.precio = p; this.stock = s; }
    set precio(v) { let n = Number(v); if (n > 0) this.#precio = n; else console.log("Precio inválido"); }
    get precio() { return "$" + this.#precio.toFixed(2); }
    set stock(v) { if (v >= 0) this.#stock = v; else console.log("Stock inválido"); }
    vender(c) { if (c <= this.#stock) { this.#stock -= c; console.log("Stock:", this.#stock); } else console.log("Stock insuficiente"); }
}

function productoMoneda() {
    let n = prompt("Nombre del producto:");
    let p = prompt("Precio (puede ser número o texto):");
    let s = Number(prompt("Stock inicial:"));
    let prod = new Producto(n, p, s);
    console.log("Precio:", prod.precio);
    let cant = Number(prompt("¿Cuántas unidades vender?"));
    prod.vender(cant);
}

productoMoneda();
