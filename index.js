/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './sistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente,'1111'));

//const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan', '12345678', 10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado,'12345'));

const gerente = new Gerente('Pablo', '12366678', 10000);
gerente.asignarClave('4567');
console.log(SistemaAutenticacion.login(gerente,'123'));

const director = new Director('Matias', '42192517', 10000);
director.asignarClave('0407');
console.log(SistemaAutenticacion.login(director,'0407'));