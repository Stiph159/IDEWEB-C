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

function menuusuarios() {
    let opcion = prompt("elige tipo de usuario:\n1. cliente\n2. administrador");

    if (opcion == "1") {
        let nombre = prompt("nombre:");
        let email = prompt("email:");
        let nivel = Number(prompt("nivel de fidelidad (1 a 5):"));
        let c = new cliente(nombre, email, nivel);
        console.log(c.mostrarinfo());
    } 
    else if (opcion == "2") {
        let nombre = prompt("nombre:");
        let email = prompt("email:");
        let permisos = prompt("ingresa permisos separados por coma (crear, editar, eliminar):").split(",");
        let a = new administrador(nombre, email, permisos);
        console.log(a.mostrarinfo());
    } 
    else {
        console.log("opcion invalida");
    }
}

menuusuarios();
