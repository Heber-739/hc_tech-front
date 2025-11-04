import { EmployeeResponse } from "../../interfaces/employee-response";

export const defaultEmployee: EmployeeResponse = {
      id: 0,
    empresa_id: 0,
    nombre:"",
    email:"",
    telefono:"",
    direccion:"",
    fecha_nac:new Date,
    turno: "",
    dni: "",
    estado:"",
    imagen:"",
    puesto: "",
    fecha_ingreso:new Date(),
    fecha_egreso: new Date(),
    activo: true,
    created_at:new Date(),
    checked:false

}

