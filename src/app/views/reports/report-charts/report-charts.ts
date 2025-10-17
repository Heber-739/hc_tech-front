import { AfterViewInit, Component, inject, OnInit, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { ChartService } from '../service/chart-seervice';
import { filter } from 'rxjs';
import { SelectModule } from 'primeng/select';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MonthStaticalData } from '../../../interfaces/report-employee';

@Component({
  selector: 'app-report-charts',
  imports: [SelectModule, ReactiveFormsModule, NgChartsModule],
  templateUrl: './report-charts.html',
  styleUrl: './report-charts.css'
})
export class ReportCharts implements AfterViewInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;


  month = signal<Date>(new Date)
  year = signal<number>(2025)
  toggleView = signal<boolean>(true)
  data = signal<any>(null);
  options= signal<any>(null);
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

public barChartData: ChartData<'bar'> | undefined =undefined;

  yearSelect = new FormControl("Mensual")

    constructor(
      private chartSeervice:ChartService
    ) {
      this.yearSelect.valueChanges.subscribe({
        next:()=> this.toggleView.update((v)=>!v)
      })
    }

    ngAfterViewInit() {
      this.chartSeervice.employeeData.pipe(
        filter((array)=> array.length > 0)
      ).subscribe({
        next:(data)=> this.setChartData(data)
      })
      this.chart?.update();

    }

    getMonth = () => this.month().toLocaleDateString('es-AR', { month: 'long' });
    getYear = () => this.year();

    next = () =>  this.toggleView()
      ? this.month.update((m) =>  new Date(m.setMonth(m.getMonth()+1)))
      : this.year.update((m) => m + 1);

    after = () => {
      this.toggleView() ?
      this.month.update((m) =>  new Date(m.setMonth(m.getMonth()-1))) : this.year.update((m) => m -1)
    }


    protected setChartData(data:MonthStaticalData[]){
      console.log({data})
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
            this.barChartData = {
              labels: [],
              datasets:[]
            }
            this.barChartData =
            {
             labels: [...data.map((d)=> new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: '2-digit' }).format(d.day))],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Dias Libre',
                        backgroundColor: "#FF820F",
                        data: day_off
                    },
                    {
                        type: 'bar',
                        label: 'Hs Trabajadas',
                        backgroundColor: "#9ACC47",
                        data: attendence
                    },
                    {
                        type: 'bar',
                        label: 'Vacaciones',
                        backgroundColor: "#9647FE",
                        data: vacancy
                    },
                    {
                        type: 'bar',
                        label: 'Ausencias',
                        backgroundColor: "#8695A7",
                        data: absent
                    },
                    {
                        type: 'bar',
                        label: 'Aus injustificadas',
                        backgroundColor: "#B3261E",
                        data: unjustified
                    },
                    {
                        type: 'bar',
                        label: 'Hs Extra',
                        backgroundColor: "#009EF7",
                        data: extra_hours
                    },
                ]
            }
            this.chart?.update();

    }

     public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {
        stacked: true,
        ticks:{
          autoSkip:false,
          font:{
            size:9
          }
        }
      },
      y: {
        stacked:true
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          font:{
            size:12
          }
        }
      },
    },
  };


  public barChartType = 'bar' as const;

}
