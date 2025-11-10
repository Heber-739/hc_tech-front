export interface EmployeeResponse {
    id: number;
    empresa_id: number;
    nombre:string;
    email:string;
    telefono:string;
    dni: string;
    fecha_nac:Date;
    puesto: string;
    direccion:string;
    estado:string;
    turno: string;
    imagen:string;
    fecha_ingreso:Date;
    fecha_egreso?: Date,
    activo: boolean,
    created_at:Date;
    rol?:string;
    checked?:boolean
}
