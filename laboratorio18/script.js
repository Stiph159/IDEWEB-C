function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(r => r.json())
        .then(d => {
            console.log("Name:", d.name);
            console.log("Username:", d.username);
            console.log("Email:", d.email);
        })
        .catch(e => console.log("Error:", e));
}

cargarUsuario();
