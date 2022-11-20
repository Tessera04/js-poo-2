export class Empleado {
    #Nombre;
    #dni;
    #salario;
    #clave;

    constructor(nombre, dni, salario){
        this.#Nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = '';
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    get clave(){
        return this.#clave;
    }

    verBonificacion(){
        return this.#salario;
    }

    _verBonificacion(bono){
        return this.#salario + this.#salario*bono/100;
    }
}