/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { cuentaAhorro } from './cuentaAhorro.js';
import { CuentaCorriente } from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

const cuentaAhorroLeonardo = new cuentaAhorro(cliente, '9985', '001');

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(1500);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(500);
console.log(cuentaDeLeonardo.verSaldo());

console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(1500);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(500);
console.log(cuentaAhorroLeonardo.verSaldo());
