async function cargarUsuario() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/10");
    const datos = await respuesta.json();
    console.log("Name:", datos.name);
    console.log("Username:", datos.username);
    console.log("Email:", datos.email);
}

cargarUsuario();
