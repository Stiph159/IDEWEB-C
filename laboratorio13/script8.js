const productos = new Map([
  ["pan", 2],
  ["leche", 3],
  ["huevos", 5]
]);
const lista = ["pan", "leche", "pan"];
const total = lista.reduce((acc, p) => acc + (productos.get(p) || 0), 0);
console.log(total);
