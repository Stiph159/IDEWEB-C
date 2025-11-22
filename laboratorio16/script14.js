const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 },
    { nombre: "Teclado", precio: 120 }
];

const json = JSON.stringify(productos);
const productosParseados = JSON.parse(json);

const ul = document.createElement("ul");

productosParseados.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.nombre;
    ul.appendChild(li);
});

document.body.appendChild(ul);
