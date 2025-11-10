export interface ProcedureRequest {
  empleado_id: number;
  empresa_id: number;
}

export interface ProcedureCreateRequest {
  empleado_id: number;
  empresa_id: number;
  asunto:string;
  descripcion:string;
}

export interface ProcedureCloseRequest {
    id:number;
    devolucion:string;
    estado:string;
}

export interface ProcedureResponse {
  id:number;
  empleado_id:number;
  empresa_id:number;
  estado:string;
  asunto:string;
  fecha_pedido: Date;
  descripcion:string;
  fecha_cerrado?: Date;
  devolucion?: string;
  encargado?: number;
}
