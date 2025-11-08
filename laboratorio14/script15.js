class cuenta {
    #saldo;

    constructor(saldo = 0) {
        this.#saldo = saldo;
    }
    depositar(monto) {
        if (monto > 0) this.#saldo += monto;
        else console.log("monto invalido");
    }
    retirar(monto) {
        if (monto <= this.#saldo) this.#saldo -= monto;
        else console.log("fondos insuficientes");
    }
    obtenerSaldo() {
        return this.#saldo;
    }
    transferir(otraCuenta, monto) {
        if (monto <= this.#saldo) {
            this.retirar(monto);
            otraCuenta.depositar(monto);
            console.log("transferencia exitosa");
        } else {
            console.log("saldo insuficiente para transferir");
        }
    }
}
class cuentaahorro extends cuenta {
    retirar(monto) {
        if (monto <= this.obtenerSaldo()) {
            super.retirar(monto);
        } else {
            console.log("no se permite retirar mas del saldo disponible");
        }
    }
}
class cuentacorriente extends cuenta {
    constructor(saldo, limite) {
        super(saldo);
        this.limite = limite;
    }
    retirar(monto) {
        if (monto <= this.obtenerSaldo() + this.limite) {
            let nuevoSaldo = this.obtenerSaldo() - monto;
            console.log("retiro exitoso, saldo actual:", nuevoSaldo);
        } else {
            console.log("limite de sobregiro excedido");
        }
    }
}
function menucuentas() {
    let tipo = prompt("elige tipo de cuenta:\n1. ahorro\n2. corriente");
    if (tipo == "1") {
        let saldo = Number(prompt("saldo inicial:"));
        let c = new cuentaahorro(saldo);
        let accion = prompt("1. depositar\n2. retirar");
        if (accion == "1") {
            let m = Number(prompt("monto a depositar:"));
            c.depositar(m);
        } else {
            let m = Number(prompt("monto a retirar:"));
            c.retirar(m);
        }
        console.log("saldo final:", c.obtenerSaldo());
    } 
    else if (tipo == "2") {
        let saldo = Number(prompt("saldo inicial:"));
        let limite = Number(prompt("limite de sobregiro:"));
        let c = new cuentacorriente(saldo, limite);
        let accion = prompt("1. depositar\n2. retirar");
        if (accion == "1") {
            let m = Number(prompt("monto a depositar:"));
            c.depositar(m);
        } else {
            let m = Number(prompt("monto a retirar:"));
            c.retirar(m);
        }
    } 
    else {
        console.log("opcion invalida");
    }
}
menucuentas();
