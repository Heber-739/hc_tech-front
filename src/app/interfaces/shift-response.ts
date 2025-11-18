export interface ShiftResponse {
    id: number;
    empleado_id: number;
    empresa_id: number;
    dia: Date,
    hora_inicio:string;
    hora_fin:string;
    entrada?: Date;
    salida?: Date;
    metodo?: string;
    created_at: Date;
}
