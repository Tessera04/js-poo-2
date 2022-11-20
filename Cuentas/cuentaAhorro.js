import { Cuenta } from "./Cuenta.js";

export class cuentaAhorro extends Cuenta{
    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0);
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 2);
    }
}