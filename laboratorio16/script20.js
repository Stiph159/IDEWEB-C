const form = document.getElementById("perfilForm");
const div = document.getElementById("perfilMostrado");

form.addEventListener("submit", e => {
    e.preventDefault();
    
    const perfil = {
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        pais: document.getElementById("pais").value
    };

    localStorage.setItem("perfilUsuario", JSON.stringify(perfil));
    mostrarPerfil(perfil);
});

function mostrarPerfil(perfil) {
    div.innerHTML = `
        <p>Nombre: ${perfil.nombre}</p>
        <p>Edad: ${perfil.edad}</p>
        <p>País: ${perfil.pais}</p>
    `;
}

const guardado = localStorage.getItem("perfilUsuario");
if (guardado) {
    mostrarPerfil(JSON.parse(guardado));
}
