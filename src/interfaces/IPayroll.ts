/*
{
  "Emp_codigo": 1,
  "Emp_tipoContrato": 1,
  "Emp_tipoTrabajador": 2,
  "Emp_subtipoTrabajador": 3,
  "Emp_cargo": "Desarrollador",
  "Emp_area": 4,
  "Emp_diasVacacionesAcumulados": 10,
  "Emp_salario": 3000000,
  "Emp_auxilioTransporte": true,
  "Emp_salarioIntegral": false,
  "Emp_frecuenciaPago": 1,
  "Emp_metodoDePago": 2,
  "Emp_nivelDeRiesgo": 3,
  "Emp_sabadoLaboral": false,
  "Emp_fechaingreso": "2024-01-01",
  "Emp_fechaFinContrato": "2024-12-31",
  "Emp_eps": 1,
  "Emp_cajaCompensacion": 2,
  "Emp_fondoPensiones": 3,
  "Emp_fondoCesantias": 4,
  "Mun_nombre": 1,
  "Emp_direccion": "Carrera 7 # 32-16",
  "Persona": {
    "Per_codigo": 1,
    "Per_tipoId": "CC",
    "Per_id": "1234567890",
    "Per_nombre": "Juan",
    "Per_apellido": "Pérez",
    "Per_correo": "juanper@yopmail.com",
    "Per_telefono": 3001234567
  },
  "Usr_codigo": 1
}
*/

export interface IEmployee {
    Emp_codigo: number;
    Emp_tipoContrato: number;
    Emp_tipoTrabajador: number;
    Emp_subtipoTrabajador: number;
    Emp_cargo: string;
    Emp_area: number;
    Emp_diasVacacionesAcumulados: number;
    Emp_salario: number;
    Emp_auxilioTransporte: boolean;
    Emp_salarioIntegral: boolean;
    Emp_frecuenciaPago: number;
    Emp_metodoDePago: number;
    Emp_nivelDeRiesgo: number;
    Emp_sabadoLaboral: boolean;
    Emp_fechaingreso: Date;
    Emp_fechaFinContrato: Date;
    Emp_eps: number;
    Emp_banco: number;
    Emp_cajaCompensacion: number;
    Emp_fondoPensiones: number;
    Emp_fondoCesantias: number;
    Mun_nombre: number;
    Emp_direccion: string;
    Persona: {
        Per_codigo: number;
        Per_tipoId: string;
        Per_id: number;
        Per_nombre: string;
        Per_apellido: string;
        Per_correo: string;
        Per_telefono: number;
    };
    Usr_codigo: number;
}


export interface IEmployeeClean {
    Emp_codigo: number;
    Emp_tipoContrato: number;
    Emp_tipoTrabajador: number;
    Emp_subtipoTrabajador: number;
    Emp_cargo: string;
    Emp_area: number;
    Emp_diasVacacionesAcumulados: number;
    Emp_salario: number;
    Emp_auxilioTransporte: boolean;
    Emp_salarioIntegral: boolean;
    Emp_frecuenciaPago: number;
    Emp_metodoDePago: number;
    Emp_nivelDeRiesgo: number;
    Emp_sabadoLaboral: boolean;
    Emp_fechaingreso: Date;
    Emp_fechaFinContrato: Date;
    Emp_eps: number;
    Emp_banco: number;
    Emp_cajaCompensacion: number;
    Emp_fondoPensiones: number;
    Emp_fondoCesantias: number;
    Mun_nombre: number;
    Emp_direccion: string;
    Per_codigo: number;
    Per_tipoId: string;
    Per_id: number;
    Per_nombre: string;
    Per_apellido: string;
    Per_correo: string;
    Per_telefono: number;
    Usr_codigo: number;
}

export function cleanEmployee(employee: IEmployee): IEmployeeClean {
    return {
        Emp_codigo: employee.Emp_codigo,
        Emp_tipoContrato: employee.Emp_tipoContrato,
        Emp_tipoTrabajador: employee.Emp_tipoTrabajador,
        Emp_subtipoTrabajador: employee.Emp_subtipoTrabajador,
        Emp_cargo: employee.Emp_cargo,
        Emp_area: employee.Emp_area,
        Emp_diasVacacionesAcumulados: employee.Emp_diasVacacionesAcumulados,
        Emp_salario: employee.Emp_salario,
        Emp_auxilioTransporte: employee.Emp_auxilioTransporte,
        Emp_salarioIntegral: employee.Emp_salarioIntegral,
        Emp_frecuenciaPago: employee.Emp_frecuenciaPago,
        Emp_metodoDePago: employee.Emp_metodoDePago,
        Emp_nivelDeRiesgo: employee.Emp_nivelDeRiesgo,
        Emp_sabadoLaboral: employee.Emp_sabadoLaboral,
        Emp_fechaingreso: employee.Emp_fechaingreso,
        Emp_fechaFinContrato: employee.Emp_fechaFinContrato,
        Emp_banco: employee.Emp_banco,
        Emp_eps: employee.Emp_eps,
        Emp_cajaCompensacion: employee.Emp_cajaCompensacion,
        Emp_fondoPensiones: employee.Emp_fondoPensiones,
        Emp_fondoCesantias: employee.Emp_fondoCesantias,
        Mun_nombre: employee.Mun_nombre,
        Emp_direccion: employee.Emp_direccion,
        Per_codigo: employee.Persona.Per_codigo,
        Per_tipoId: employee.Persona.Per_tipoId,
        Per_id: employee.Persona.Per_id,
        Per_nombre: employee.Persona.Per_nombre,
        Per_apellido: employee.Persona.Per_apellido,
        Per_correo: employee.Persona.Per_correo,
        Per_telefono: employee.Persona.Per_telefono,
        Usr_codigo: employee.Usr_codigo
    };
}


export function formEmployee(employee: IEmployeeClean): IEmployee {
    return {
        Emp_codigo: employee.Emp_codigo,
        Emp_tipoContrato: employee.Emp_tipoContrato,
        Emp_tipoTrabajador: employee.Emp_tipoTrabajador,
        Emp_subtipoTrabajador: employee.Emp_subtipoTrabajador,
        Emp_cargo: employee.Emp_cargo,
        Emp_area: employee.Emp_area,
        Emp_diasVacacionesAcumulados: employee.Emp_diasVacacionesAcumulados,
        Emp_salario: employee.Emp_salario,
        Emp_auxilioTransporte: employee.Emp_auxilioTransporte,
        Emp_salarioIntegral: employee.Emp_salarioIntegral,
        Emp_frecuenciaPago: employee.Emp_frecuenciaPago,
        Emp_metodoDePago: employee.Emp_metodoDePago,
        Emp_nivelDeRiesgo: employee.Emp_nivelDeRiesgo,
        Emp_sabadoLaboral: employee.Emp_sabadoLaboral,
        Emp_fechaingreso: employee.Emp_fechaingreso,
        Emp_fechaFinContrato: employee.Emp_fechaFinContrato,
        Emp_eps: employee.Emp_eps,
        Emp_banco: employee.Emp_banco,
        Emp_cajaCompensacion: employee.Emp_cajaCompensacion,
        Emp_fondoPensiones: employee.Emp_fondoPensiones,
        Emp_fondoCesantias: employee.Emp_fondoCesantias,
        Mun_nombre: employee.Mun_nombre,
        Emp_direccion: employee.Emp_direccion,
        Persona: {
            Per_codigo: employee.Per_codigo,
            Per_tipoId: employee.Per_tipoId,
            Per_id: employee.Per_id,
            Per_nombre: employee.Per_nombre,
            Per_apellido: employee.Per_apellido,
            Per_correo: employee.Per_correo,
            Per_telefono: employee.Per_telefono
        },
        Usr_codigo: employee.Usr_codigo
    };
}
