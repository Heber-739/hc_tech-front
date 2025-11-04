import { Rols } from "./rols";

export interface UserData {
          id: number,
          nombre: string,
          email: string,
          empresa_id: number,
          rol: Rols
        }
