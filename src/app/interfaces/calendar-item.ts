export interface CalendarItem {
  fecha:Date;
  items: CalendarItemData[];
}

export interface CalendarItemData {
    id:number;
    type: CalendarItemType;
}

export enum CalendarItemType {
  VACANCY = "Vacaciones",
  ASSIST = "Asistencia",
  OFF = "Dia Libre",
  OTHER = "Otro",
  ILL = 'Enfermedad',
  LICENSE = 'Licencia',
  TRAINING = 'Capacitación',

}
