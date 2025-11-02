class CuentaBancaria {
  constructor(titular,saldo=0){this.titular=titular;this.saldo=saldo;}
  depositar(m){this.saldo+=m;}
  retirar(m){if(this.saldo>=m)this.saldo-=m;}
}