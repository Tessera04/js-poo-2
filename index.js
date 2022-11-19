/*Importación de clases*/
import {Cliente} from './Cliente.js'
//import {CuentaCorriente} from './CuentaCorriente.js';
//import {cuentaAhorro} from './cuentaAhorro.js';
import {Cuenta} from './Cuenta.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new Cuenta('Corriente', cliente, '1', '001', 0);
const cuentaDeMaria = new Cuenta('Corriente', cliente2, '2', '002', 0);

const cuentaAhorroLeonardo = new Cuenta('Ahorro', cliente, '9985', '001', 0);

console.log(cuentaDeLeonardo);

cuentaDeLeonardo.depositoEnCuenta(1500);
console.log(cuentaDeLeonardo.verSaldo());

console.log(cuentaDeLeonardo);

cuentaDeLeonardo.retirarDeCuenta(500);
console.log(cuentaDeLeonardo.verSaldo());

console.log(cuentaDeLeonardo);
