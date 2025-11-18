import { Companies } from "../../../interfaces/company";
import { EmployeeProfile } from "../../../interfaces/employee-profile";
import { EmployeeResponse } from "../../../interfaces/employee-response";
import { ProcedureItemData } from "../../../interfaces/procedures-item";
import { ProcedureCreateRequest } from "../../../interfaces/procedures-req-res";
import storeService from "../../services/store-service";

export const STATUS_OPTIONS: string[] = [
  'Pendiente',
  'En progreso',
  'Aprobado',
  'Rechazado'
];

export const METTER_OPTIONS: string[] = [
  'Vacaciones',
  'Día libre',
  'Enfermedad',
  'Licencia',
  'Capacitación',
  'Horario',
  'Pagos',
  'Otro'
];

function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateRandomDate(startOffsetDays: number, endOffsetDays: number): Date {
  const today = new Date();
  const start = new Date(today);
  const end = new Date(today);

  start.setDate(today.getDate() + startOffsetDays);
  end.setDate(today.getDate() + endOffsetDays);

  const time = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(time);
}

export async function generateProcedureItem(): Promise<ProcedureCreateRequest[]> {
  const response = [];
  const employees = await storeService.getWhenExist<EmployeeResponse[]>("list-complete-employees");
  const iterations = Math.floor(Math.random() * 50) + 200;

  for (let i = 0; i < iterations; i++) {

    const employee = getRandomElement(employees);
    const {id} = employee;
    const {id:empresa_id} = storeService.get<Companies>("company-default-selected");

  const procedure: ProcedureCreateRequest = {
    empleado_id: id,
    empresa_id,
    asunto: getRandomElement(METTER_OPTIONS),
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  response.push(procedure)
  }

  return response;
}

export async function takesProcedureItem(): Promise<any[]> {
  const response = [];
  const employees = await storeService.getWhenExist<EmployeeResponse[]>("list-complete-employees");
  const admins = employees.filter((e)=> e.rol != "empleado")
  const iterations = Math.floor(Math.random() * 50) + 200;

  for (let i = 0; i < iterations; i++) {
    const status = getRandomElement(STATUS_OPTIONS);
    const entryDate = generateRandomDate(-30, -5);

    const employee = getRandomElement(employees);
    const {id} = employee;
    const {id:empresa_id} = storeService.get<Companies>("company-default-selected");

  const procedure: any = {
    empleado_id: id,
    empresa_id,
    asunto: getRandomElement(METTER_OPTIONS),
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  if (status != 'Pendiente') {
    let admin = getRandomElement(admins);
    const {id, nombre:name} = admin;
    procedure.owner = {id, name};
  }

  if (['Aprobado', 'Rechazado'].includes(status)) {
    procedure.discharge_date = generateRandomDate(entryDate.getDate() - new Date().getDate() + 5, entryDate.getDate() - new Date().getDate() + 15);
    procedure.feedback = 'Feedback: Proceso revisado y gestionado con éxito.';
  }

  response.push(procedure)
  }

  return response;
}
