async function cargarUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const datos = await respuesta.json();
        datos.forEach(u => console.log(u.name));
    } catch (error) {
        console.log("Error:", error);
    }
}

cargarUsuarios();
