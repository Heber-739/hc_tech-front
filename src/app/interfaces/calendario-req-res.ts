import { CalendarItemType } from "./calendar-item";

export interface CalendarReq {
    id:number;
    fecha_inicio:Date;
    fecha_fin:Date;
}

export interface CalendarCreateReq {
    empleado_id:number;
    estado:string;
    fecha:Date;
}



export interface CalendarResponse {
  id:number;
  empleado_id:number;
  estado:CalendarItemType;
  fecha:string
}
