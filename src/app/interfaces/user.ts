import { Rols } from "./rols";

export interface UserData {
          id: number;
          empleado_id:number;
          nombre: string;
          email: string;
          imagen?: string;
          rol: Rols;
        }
