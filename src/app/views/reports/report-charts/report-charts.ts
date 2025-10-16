import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartService } from '../service/chart-seervice';
import { MonthStaticalData } from '../../../interfaces/report-employee';
import { filter } from 'rxjs';
import { SelectModule } from 'primeng/select';
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-report-charts',
  imports: [ChartModule, SelectModule, ReactiveFormsModule],
  templateUrl: './report-charts.html',
  styleUrl: './report-charts.css'
})
export class ReportCharts implements OnInit {

  month = signal<Date>(new Date)
  year = signal<number>(2025)
  toggleView = signal<boolean>(true)
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);

  statics_numbers: {label:string,value:string}[] = [
    {
      label:"Ds Trabajados",
      value:'0'
  },
    {
      label:"Hs Trabajadas",
      value:'0'
  },
    {
      label:"Hs Extras",
      value:'0'
  },
    {
      label:"Ausencias",
      value:'0'
  },
    {
      label:"Aus injustif",
      value:'0'
  },
    {
      label:"Cumplimiento",
      value:'0 %'
  },
    {
      label: "Vacaciones",
      value:'0'
  },
    {
      label:"Dias libre",
      value:'0 %'
  },
]

  yearSelect = new FormControl("Mensual")

    constructor(
      private chartSeervice:ChartService
    ) {
      this.yearSelect.valueChanges.subscribe({
        next:()=> this.toggleView.update((v)=>!v)
      })
    }

    ngOnInit() {
      this.chartSeervice.employeeData.pipe(
        filter((array)=> array.length > 0)
      ).subscribe({
        next:(data)=> this.initChart(data)
      })

    }

    initChart(data:MonthStaticalData[]) {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            const day_off: number[] = [];
            const attendence: number[] = [];
            const vacancy: number[] = [];
            const absent: number[] = [];
            const unjustified: number[] = [];
            const extra_hours: number[] = [];

            data.forEach((d)=> {

              day_off.push(d.day_off ? 100 : 0);
              attendence.push(d.attendence);
              vacancy.push(d.vacations ? 100 : 0);
              absent.push(d.absence);
              unjustified.push(d.unjustified ? 100 : 0);
              extra_hours.push(d.extra_hours)
            })

            this.data = signal({
                labels: data.map((d)=> new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: '2-digit' }).format(d.day)),
                datasets: [
                    {
                        type: 'bar',
                        label: 'Dias Libre',
                        backgroundColor: documentStyle.getPropertyValue('--light-orange'),
                        data: day_off
                    },
                    {
                        type: 'bar',
                        label: 'Hs Trabajadas',
                        backgroundColor: documentStyle.getPropertyValue('--light-green'),
                        data: attendence
                    },
                    {
                        type: 'bar',
                        label: 'Vacaciones',
                        backgroundColor: documentStyle.getPropertyValue('--light-violet'),
                        data: vacancy
                    },
                    {
                        type: 'bar',
                        label: 'Ausencias',
                        backgroundColor: documentStyle.getPropertyValue('--gray'),
                        data: absent
                    },
                    {
                        type: 'bar',
                        label: 'Aus injustificadas',
                        backgroundColor: documentStyle.getPropertyValue('--light-red'),
                        data: unjustified
                    },
                    {
                        type: 'bar',
                        label: 'Hs Extra',
                        backgroundColor: documentStyle.getPropertyValue('--accent'),
                        data: extra_hours
                    },
                ]
            });

            this.options = signal({
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            });
        }
    }

    getMonth = () => this.month().toLocaleDateString('es-AR', { month: 'long' });
    getYear = () => this.year();

    next = () => {
     this.toggleView() ?  this.month.update((m) =>  new Date(m.setMonth(m.getMonth()+1))) : this.year.update((m) => m + 1);
    }
    after = () => {
      this.toggleView() ?
      this.month.update((m) =>  new Date(m.setMonth(m.getMonth()-1))) : this.year.update((m) => m -1)
    }
}
