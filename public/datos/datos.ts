import { Rols } from "../../src/app/interfaces/rols"
import { UserData } from "../../src/app/interfaces/user"

export const user: UserData = {
  id:0,
  nombre: "",
  email:"",
  imagen:"",
  empresa_id: 0,
  rol: Rols.EMPLEADO
}

export const company = {
  id: 0,
    user_id: 0,
    nombre:"",
    pag_web:"",
    direccion:"",
    razon_social:"",
    created_at: new Date(),
    email:"",
    telefono:"",
    imagen: "",
    cuit:""
}
