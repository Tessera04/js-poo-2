/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Cuenta } from './Cuentas/Cuenta.js';
import { cuentaAhorro } from './Cuentas/cuentaAhorro.js';
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan', '12345678', 10000);
const gerente = new Gerente('Pablo', '12366678', 10000);
const director = new Director('Matias', '42192517', 10000);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());