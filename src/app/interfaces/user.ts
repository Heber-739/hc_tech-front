import { Rols } from "./rols";

export interface UserData {
          id: number;
          empleado_id:number;
          nombre: string;
          email: string;
          empresa_id: number;
          imagen?: string;
          rol: Rols;
        }
