const input = document.getElementById("nombre");
const btn = document.getElementById("guardarBtn");

btn.addEventListener("click", () => {
    const usuario = { nombre: input.value };
    const json = JSON.stringify(usuario);
    console.log(json);
});
