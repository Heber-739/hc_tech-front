export interface CalendarItem {
  date:Date;
  items: CalendarItemData[];
}

export interface CalendarItemData {
    type: CalendarItemType;
    schedule: [Date,Date];
    description:string;
}

export enum CalendarItemType {
  VACANCY = "Vacaciones",
  ASSIST = "Asistencia",
  OFF = "Dia Libre",
  OTHER = "Otro",
}
