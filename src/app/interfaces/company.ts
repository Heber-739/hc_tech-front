export interface CompanyData {
  id:string;
  name:string;
  web_page:string;
  address:string;
  company_name:string;
  fundation_year:Date;
  email:string;
  phone_number:number;
  image:string;
}

export interface Companies {
    id: number;
    user_id: number;
    nombre:string;
    pag_web:string;
    direccion:string;
    razon_social:string;
    created_at: Date;
    email:string;
    telefono:string;
    imagen: string;
    cuit:string;

}
