import { v4 } from "uuid";
import { EmployeeProfile } from "../../../interfaces/employee-data";
import { employeeRols } from "../../constants/rols";
import { employeeStatus } from "../../constants/status";

let listEmployes: EmployeeProfile[] | null = null;

export const generateEmployeeData = (): EmployeeProfile[] => {
  if(listEmployes) return listEmployes;
  const data: EmployeeProfile[] = [];
  const roles: string[] = employeeRols;
  const workstations: string[] = ["Desarrollador Frontend", "Desarrollador Backend", "Diseñador UX/UI", "Gerente de Proyecto", "Analista de Datos", "Especialista en QA"];
  const schedules: string[] = ["7:00 - 15:00", "15:00 - 23:00", "23:00 - 07:00"];
  const statuses: string[] = employeeStatus;
  const names: string[] = ["Sofía","Alejandro","Valentina","Sebastián","Camila","Mateo","Isabella","Nicolás","Mariana","Diego","Lucía","Gabriel","Elena","Daniel","Paula","Javier","Andrea","Ricardo","Valeria","Manuel"
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
  for (let i = 1; i <= 300; i++) {
    const surname = getRandomItem(surnames);
    const name = getRandomItem(names);

    const employee: EmployeeProfile = {
      id: v4(),
      name: ` ${surname} ${name}`,
      email: `${name[0]}${surname}@gmail.com`,
      workstation: getRandomItem(workstations),
      rol: getRandomItem(roles),
      dni: Math.floor(Math.random() * (15000000) + 35000000),
      phone_number:`+549${getNumbers('**********')}`,
      work_schedule: getRandomItem(schedules),
      address: `${getRandomItem(typesStreet)} ${getRandomItem(streets)} ${getNumbers('****')}, ${getRandomItem(cities)}`,
      birthday:getRandomDate(75,18),
      status: getRandomItem(statuses),
      image: "https://i.pinimg.com/originals/6a/0d/18/6a0d184b73dc7bf9b47cb755ef8d92cb.png", // Misma URL para todos
      entry_date:getRandomDate(15,1960),
      discharge_date:getRandomDate(20,1980),
      punctuality:Number(getNumbers('**')),
      attendance:Number(getNumbers('**')),
      checked:false
    };
    data.push(employee);
  }
  listEmployes = data;
  return data;
}
