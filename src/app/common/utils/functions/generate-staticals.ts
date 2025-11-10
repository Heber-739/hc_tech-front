import { MonthStaticalData, ReportEmployeeData } from '../../../interfaces/report-employee';
import { generateEmployeeData } from './generate-employees';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dayStat: MonthStaticalData = {
  id: '',
  day: new Date(),
  day_off: false,
  attendence: 0,
  vacations: false,
  absence: 0,
  unjustified: false,
  extra_hours: 0,
};

let statics:ReportEmployeeData[] = [];

export function generateEmployeeStats(
  inVacations: boolean = false,
  days: number = 30
): MonthStaticalData[] {

  const today = new Date();
  const stats: MonthStaticalData[] = [];
  let vacationDaysRemaining = inVacations ? getRandomInt(0, 3) : 0;


  for (let i = days - 1; i >= 0; i--) {
    const currentDay = new Date(today);
    currentDay.setDate(today.getDate() - i);

    if (vacationDaysRemaining > 0) {
      vacationDaysRemaining--;
      stats.push({
        ...dayStat,
        day: currentDay,
        vacations: true,
      });
      continue;
    }

    if (Math.random() < 0.04) {
      stats.push({
        ...dayStat,
        day: currentDay,
        unjustified:true
      });
      continue;
    }

    if (Math.random() < 0.14) {
      stats.push({
        ...dayStat,
        day: currentDay,
        day_off: true,
      });
      continue;
    }

    if (Math.random() < 0.2) {
      let extra_hours = getRandomInt(1, 30);
      stats.push({
        ...dayStat,
        day: currentDay,
        attendence: 100 - extra_hours,
        extra_hours,
      });

    } else {
      if (Math.random() < 0.1) {
        stats.push({
          ...dayStat,
          day: currentDay,
          absence: 100,
        });
      } else {
        let absence = getRandomInt(0,20);
        stats.push({
          ...dayStat,
          day: currentDay,
          attendence: 100 - absence,
          absence
        }
        )
      }
    }

  }
  return stats;
}

export const generateEmployeesStatics = async ():Promise<ReportEmployeeData[]> => {
  if(statics.length > 1) return statics;
  let employees = await generateEmployeeData()
  let response = employees.map((e)=>{
    let {id,imagen, nombre, puesto, estado, fecha_ingreso, fecha_egreso,turno} = e;
    return ({
      employee: {id,imagen, nombre, puesto, estado, fecha_ingreso, fecha_egreso,turno},
      data:generateEmployeeStats(status === "Vacaciones")
    })
  })
  // statics = response;
  return [];
}
