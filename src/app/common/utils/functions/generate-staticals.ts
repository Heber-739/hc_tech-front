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

let statics:MonthStaticalData[] = [];

export function generateEmployeeStats(
  inVacations: boolean = false,
  days: number = 30
): MonthStaticalData[] {
  if(statics.length > 1) return statics;

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
  statics = stats;
  return stats;
}

export const generateEmployeesStatics = ():ReportEmployeeData[] => {
  let employees = generateEmployeeData()
  let response = employees.map((e)=>{
    let {id,image, name, workstation, status, entry_date, discharge_date,work_schedule} = e;
    return ({
      employee: {id,image, name, workstation, status, entry_date, discharge_date,work_schedule},
      data:generateEmployeeStats(status === "Vacaciones")
    })
  })
  return response;
}
