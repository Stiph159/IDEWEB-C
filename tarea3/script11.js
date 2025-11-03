const lista = document.getElementById("lista");

const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 4";
lista.appendChild(nuevoElemento);

const segundoElemento = lista.children[1];
lista.removeChild(segundoElemento);
