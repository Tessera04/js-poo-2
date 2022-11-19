/*Importación de clases*/
import {Cliente} from './Cliente.js'
//import {CuentaCorriente} from './CuentaCorriente.js';
//import {cuentaAhorro} from './cuentaAhorro.js';
import {Cuenta} from './Cuenta.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new Cuenta(cliente, '1', '001', 0);
const cuentaDeMaria = new Cuenta(cliente2, '2', '002', 0);

const cuentaAhorroLeonardo = new Cuenta(cliente, '9985', '001', 0);

console.log(cuentaDeLeonardo);
console.log(cuentaDeMaria);
cuentaDeLeonardo.depositoEnCuenta(1500);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(500);
console.log(cuentaDeLeonardo.verSaldo());
console.log(cuentaAhorroLeonardo);

