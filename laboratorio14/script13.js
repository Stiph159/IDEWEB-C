class usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    mostrarinfo() {
        return "usuario: " + this.nombre + " - email: " + this.email;
    }
}

class cliente extends usuario {
    constructor(nombre, email, nivel) {
        super(nombre, email);
        this.nivel = nivel;
    }

    mostrarinfo() {
        return super.mostrarinfo() + " - nivel: " + this.nivel;
    }
}

class administrador extends usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }

    mostrarinfo() {
        return super.mostrarinfo() + " - permisos: " + this.permisos.join(", ");
    }
}

function listausuarios() {
    let usuarios = [];
    let cantidad = Number(prompt("cuantos usuarios deseas agregar:"));

    for (let i = 0; i < cantidad; i++) {
        let tipo = prompt("tipo de usuario (1=cliente, 2=administrador):");

        if (tipo == "1") {
            let nombre = prompt("nombre:");
            let email = prompt("email:");
            let nivel = Number(prompt("nivel de fidelidad (1 a 5):"));
            usuarios.push(new cliente(nombre, email, nivel));
        } 
        else if (tipo == "2") {
            let nombre = prompt("nombre:");
            let email = prompt("email:");
            let permisos = prompt("ingresa permisos separados por coma:").split(",");
            usuarios.push(new administrador(nombre, email, permisos));
        } 
        else {
            console.log("tipo invalido, se salta este usuario");
        }
    }

    console.log("informacion de usuarios registrados:");
    usuarios.forEach(u => console.log(u.mostrarinfo()));
}

listausuarios();
