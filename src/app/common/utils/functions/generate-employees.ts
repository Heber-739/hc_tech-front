import { EMPLOYEE_STATUS } from "../../constants/status";
import { EmployeeResponse } from "../../../interfaces/employee-response";
import storeService from "../../services/store-service";
import { Companies } from "../../../interfaces/company";

let listEmployes: EmployeeResponse[] | null = null;

export const generateEmployeeData = async (): Promise<EmployeeResponse[]> => {
  if(listEmployes) return listEmployes;
  const data: EmployeeResponse[] = [];
  const workstations: string[] = ["Desarrollador Frontend", "Desarrollador Backend", "Diseñador UX/UI", "Gerente de Proyecto", "Analista de Datos", "Especialista en QA", "Recursos Humanos"];
  const schedules: string[] = ["Mañana", "Tarde", "Noche"];
  const statuses: string[] = EMPLOYEE_STATUS;
  const names: string[] = ["Sofía","Ariel","Romina","Cristian","Alejandro","Valentina","Sebastián","Camila","Mateo","Isabella","Nicolás","Mariana","Diego","Lucía","Gabriel","Elena","Daniel","Paula","Javier","Andrea","Ricardo","Valeria","Manuel"
];
  const surnames: string[] = ["García","Rodríguez","González","Fernández","López","Martínez","Sánchez","Pérez","Gómez","Martín","Jiménez","Ruiz","Hernández","Díaz","Moreno","Muñoz","Álvarez","Romero","Alonso","Gutiérrez"
];

const typesStreet: string[] = [
        'Calle', 'Avenida', 'Bulevar', 'Pasaje', 'Ronda', 'Carrera', 'Transversal', 'Diagonal'
    ];

    // Nombres comunes para calles (Personas, Lugares, Fechas, Objetos)
    const streets: string[] = [
        'San Martín', 'Belgrano', 'Libertador', 'General Paz', 'Sarmiento', 'Rivadavia',
        'España', 'Buenos Aires', 'Córdoba', 'Mayo', 'Junio', 'Octubre', 'La Pampa',
        'Los Álamos', 'El Ceibo', 'Los Pinos', 'Chacabuco', 'Caseros', 'Las Heras'
    ];

    const cities : string[] = [
  "Ciudad Autónoma de Buenos Aires",
  "La Plata, Buenos Aires",
  "San Fernando del Valle de Catamarca, Catamarca",
  "Resistencia, Chaco",
  "Rawson, Chubut",
  "Córdoba ,Córdoba",
  "Corrientes, Corrientes",
  "Paraná, Entre Ríos",
  "Formosa, Formosa",
  "San Salvador de Jujuy, Jujuy",
  "Santa Rosa, La Pampa",
  "La Rioja, La Rioja",
  "Mendoza, Mendoza",
  "Posadas, Misiones",
  "Neuquén, Neuquén",
  "Viedma, Río Negro",
  "Salta, Salta",
  "San Juan, San Juan",
  "San Luis, San Luis",
  "Río Gallegos, Santa Cruz",
  "Santa Fe, Santa Fe",
  "Santiago del Estero, Santiago del Estero",
  "Ushuaia, Tierra del Fuego",
  "San Miguel de Tucumán, Tucumán"
];
  // Función auxiliar para obtener un elemento aleatorio de un array
  const getRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  // Función auxiliar para generar un tiempo aleatorio en la empresa (ej. "2 años 5 meses")

  const getRandomDate = (MAX:number,MIN:number): Date  => {
    const year = Math.floor(Math.random() * (MAX)) + MIN;
    const month = Math.floor(Math.random() * 12);
    const diaAleatorio = Math.floor(Math.random() * 27) + 1;
    return new Date(year, month, diaAleatorio, 0, 0, 0, 0);
  }

  const getNumbers = (len:string) => len.replace(/[*]/g,()=>`${Math.floor(Math.random() * 9)}` )

  const {id} = await storeService.getWhenExist<Companies>("company-default-selected");

  const getprobability = (p:number) => {

  }

  for (let i = 1; i <= 300; i++) {
    const surname = getRandomItem(surnames);
    const name = getRandomItem(names);

    const employee: EmployeeResponse = {
      id: 0,
      empresa_id: id,
      nombre: ` ${surname} ${name}`,
      email: `${name[0]}${surname}@gmail.com`,
      telefono:`+549${getNumbers('**********')}`,
      rol: getRandomItem(["admin", "empleado", "empleado", "empleado", "empleado", "empleado", "empleado"]),
      dni: `${Math.floor(Math.random() * (15000000) + 35000000)}`,
      fecha_nac:getRandomDate(75,18),
      puesto: getRandomItem(workstations),
      direccion: `${getRandomItem(typesStreet)} ${getRandomItem(streets)} ${getNumbers('****')}, ${getRandomItem(cities)}`,
      estado: getRandomItem(statuses),
      turno: getRandomItem(schedules),
      imagen: "datos/employee.jpg",
      fecha_ingreso:getRandomDate(15,1960),
      fecha_egreso: Math.random() < 0.08 ? getRandomDate(20,1980): undefined,
      activo:true,
      created_at:getRandomDate(2025,1997),
      checked:false
    };
    data.push(employee);
  }
  listEmployes = data;
  return data;
}
