const jsonString = '{"producto":"Mouse","precio":80}';
const obj = JSON.parse(jsonString);

const p = document.createElement("p");
p.textContent = obj.producto;
document.body.appendChild(p);
