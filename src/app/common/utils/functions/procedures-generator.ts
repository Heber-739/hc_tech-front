import { ProcedureItemData } from "../../../interfaces/procedures-item";
import { generateEmployeeData } from "./generate-employees";

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

export function generateProcedureItem(): ProcedureItemData[] {
  const response = [];
  const employees = generateEmployeeData();
  const iterations = Math.floor(Math.random() * 12) + 17;

  for (let i = 0; i < iterations; i++) {
    const status = getRandomElement(STATUS_OPTIONS);
  const entryDate = generateRandomDate(-30, -5);

  const hasFeedback = Math.random() < 0.5 && status !== 'Pendiente';
  const {id,rol,image,name} = employees[Math.floor(Math.random() * employees.length-1)]

  const procedure: ProcedureItemData = {
    employee: {id,rol,image,name},
    status: status,
    entry_date: entryDate,
    metter: getRandomElement(METTER_OPTIONS),
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  if (['Aprobado', 'Rechazado', 'Completado', 'Archivado'].includes(status)) {
    procedure.discharge_date = generateRandomDate(entryDate.getDate() - new Date().getDate() + 5, entryDate.getDate() - new Date().getDate() + 15);
  }

  if (hasFeedback) {
    procedure.feedback = 'Feedback: Proceso revisado y gestionado con éxito.';
  }

  if (status !== 'Pendiente') {
    procedure.owner = getRandomElement(employees).name;
  }
  response.push(procedure)
  }

  return response;
}
