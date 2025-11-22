const section = document.getElementById("seccion");

const viejoH2 = section.querySelector("h2");
if (viejoH2) viejoH2.remove();

const h2 = document.createElement("h2");
h2.textContent = "Título nuevo";
section.appendChild(h2);

const p = document.createElement("p");
p.textContent = "Descripción generada";
section.appendChild(p);

const ul = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Ítem " + i;
    ul.appendChild(li);
}
section.appendChild(ul);
