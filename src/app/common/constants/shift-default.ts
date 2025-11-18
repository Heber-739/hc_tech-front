import { ShiftItem } from "../../interfaces/shift-item";

export const shiftItem: ShiftItem = {
  date: new Date(new Date().getDay() +1),
  Tarde:[],
  Mañana:[],
  Noche:[]
}

export const shift = [shiftItem,shiftItem,shiftItem,shiftItem,shiftItem,shiftItem,shiftItem];
