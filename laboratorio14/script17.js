class notificacion {
    enviar() {
        console.log("enviando notificacion...");
    }
}

class email extends notificacion {
    enviar() {
        console.log("enviando correo electronico");
    }
}

class sms extends notificacion {
    enviar() {
        console.log("enviando mensaje sms");
    }
}

class push extends notificacion {
    enviar() {
        console.log("enviando notificacion push");
    }
}

function menunotificaciones() {
    let lista = [];
    let cantidad = Number(prompt("cuantas notificaciones deseas enviar:"));

    for (let i = 0; i < cantidad; i++) {
        let tipo = prompt("tipo de notificacion (1=email, 2=sms, 3=push):");
        if (tipo == "1") lista.push(new email());
        else if (tipo == "2") lista.push(new sms());
        else if (tipo == "3") lista.push(new push());
        else console.log("tipo invalido");
    }

    console.log("procesando notificaciones...");
    lista.forEach(n => n.enviar());
}

menunotificaciones();
