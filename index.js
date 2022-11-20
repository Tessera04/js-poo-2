/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Cuenta } from './Cuenta.js';
import { cuentaAhorro } from './cuentaAhorro.js';
import { CuentaCorriente } from './CuentaCorriente.js';
import { CuentaNomina } from './CuentaNomina.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

const cuentaAhorroLeonardo = new cuentaAhorro(cliente, '9985', '001');

//const cuentaSimple = new Cuenta(cliente, '098', '001', 100);

const CuentaNominaLeonardo = new CuentaNomina(cliente, '098', '001', 100);
CuentaNominaLeonardo.depositoEnCuenta(150);
console.log(CuentaNominaLeonardo.verSaldo());

CuentaNominaLeonardo.retirarDeCuenta(100);
console.log(CuentaNominaLeonardo.verSaldo());