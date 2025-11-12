import { EmployeeResponse } from './employee-response';



export type ReportUser = Pick<
    EmployeeResponse,
    | 'id'
    | 'imagen'
    | 'nombre'
    | 'puesto'
    | 'estado'
    | 'fecha_ingreso'
    | 'fecha_egreso'
    | 'turno'
  >;

// export interface MonthStaticalData {
//   empleado_id: number;
//   dia: Date;
//   data: {
//     dia_libre: boolean;
//      asistido: number;
//      vacaciones: boolean
//      ausencia: number;
//      licencia: boolean;
//      enfermedad: boolean;
//      capacitación: boolean;
//   };
// }

export interface ReportResponse {
  empleado_id: number,
  dia: Date,
  data: {
    dia_libre: boolean;
     asistido: number;
     vacaciones: boolean
     ausencia: number;
     licencia: boolean;
     enfermedad: boolean;
     capacitación: boolean;
    }
}
