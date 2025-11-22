const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 }
];

document.getElementById("generar").addEventListener("click", () => {
    const cont = document.getElementById("contenedorTabla");
    cont.innerHTML = "";

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    const th1 = document.createElement("th");
    th1.textContent = "Nombre";

    const th2 = document.createElement("th");
    th2.textContent = "Precio";

    trHead.appendChild(th1);
    trHead.appendChild(th2);
    thead.appendChild(trHead);
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");

    productos.forEach(p => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.textContent = p.nombre;
        td2.textContent = p.precio;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    cont.appendChild(tabla);
});
