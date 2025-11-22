const usuario = { nombre: "Carlos", correo: "carlos@mail.com", rol: "Admin" };
localStorage.setItem("usuarioData", JSON.stringify(usuario));

const datos = JSON.parse(localStorage.getItem("usuarioData"));

const div = document.getElementById("resultado");
div.innerHTML = `
<p>Nombre: ${datos.nombre}</p>
<p>Correo: ${datos.correo}</p>
<p>Rol: ${datos.rol}</p>
`;
