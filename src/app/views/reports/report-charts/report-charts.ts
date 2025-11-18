import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, effect, inject, OnInit, output, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { distinctUntilChanged, filter } from 'rxjs';
import { SelectModule } from 'primeng/select';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ReportResponse } from '../../../interfaces/report-employee';
import storeService from '../../../common/services/store-service';

@Component({
  selector: 'app-report-charts',
  imports: [SelectModule, ReactiveFormsModule, NgChartsModule],
  templateUrl: './report-charts.html',
  styleUrl: './report-charts.css'
})
export class ReportCharts implements AfterViewInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;


  month = signal<Date>(new Date)
  data = signal<ReportResponse[]>([]);
  options= signal<any>(null);
  platformId = inject(PLATFORM_ID);

  date = output<Date>()


  statics_numbers: {label:string,value:number}[] = [];

public barChartData: ChartData<'bar'> | undefined =undefined;


    constructor(private cdn:ChangeDetectorRef) {
 effect(()=> {
      this.date.emit(this.month())
      this.chart?.update();
    })
    storeService.getObservable<ReportResponse[]>("chart-data").pipe(
          filter((val)=> !!val),
          distinctUntilChanged()
        ).subscribe({
          next:(data)=> {
            this.data.set(data);
            this.setChartData()
            this.cdn.detectChanges();


          }
        })
        this.init();
      }
      ngAfterViewInit(): void {
        setTimeout(() => {

          this.chart?.update();
          this.setChartData();
          window.dispatchEvent(new Event('resize'))
        }, 100);
  }

  private async init(){
    const data = await storeService.getWhenExist<ReportResponse[]>("chart-data");
    this.data.set(data);
    this.setChartData()

  }

    getMonth = () => this.month().toLocaleDateString('es-AR', { month: 'long' });

    next = () =>  this.month.update((m) =>  new Date(m.setMonth(m.getMonth()+1)));

    after = () => this.month.update((m) =>  new Date(m.setMonth(m.getMonth()-1)));



    protected setChartData(){
      let data = this.data();
      const day_off: number[] = [];
            const attendence: number[] = [];
            const vacancy: number[] = [];
            const absent: number[] = [];
            const licencia: number[] = [];
            const enfermedad: number[] = [];
            const capacitación: number[] = [];

            data.forEach((d)=> {

              day_off.push(d.data.dia_libre ? 100 : 0);
              attendence.push(d.data.asistido);
              absent.push(d.data.ausencia);
              vacancy.push(d.data.vacaciones ? 100 : 0);
              licencia.push(d.data.licencia ? 100 : 0);
              enfermedad.push(d.data.enfermedad ? 100 : 0)
              capacitación.push(d.data.capacitación ? 100 : 0)
            })

            this.statics_numbers = [{
      label:"Asistencia",
      value:attendence.filter((d)=>d > 0).length
  },
    {
      label:"Enfermedad",
      value:enfermedad.filter((d)=>d > 0).length
  },
    {
      label:"Ausencias",
      value:absent.filter((d)=>d > 0).length
  },
    {
      label:"Licencia",
      value:licencia.filter((d)=>d > 0).length
  },
    {
      label:"Capacitación",
      value:capacitación.filter((d)=>d > 0).length
  },
    {
      label: "Vacaciones",
      value:vacancy.filter((d)=>d > 0).length
    },
    {
      label:"Dia Libre",
      value:day_off.filter((d)=>d > 0).length
  },
]


            this.barChartData = {
              labels: [],
              datasets:[]
            }
            this.barChartData =
            {
             labels: [...data.map((d)=> new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: '2-digit' }).format(d.dia))],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Dias Libre',
                        backgroundColor: "#FF820F",
                        data: day_off
                    },
                    {
                        type: 'bar',
                        label: 'Asistencia',
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
                        label: 'Licencia',
                        backgroundColor: "#9647FE",
                        data: licencia
                    },
                    {
                        type: 'bar',
                        label: 'Ausencias',
                        backgroundColor: "#8695A7",
                        data: absent
                    },
                    {
                        type: 'bar',
                        label: 'Enfermedad',
                        backgroundColor: "#B3261E",
                        data: enfermedad
                    },
                    {
                        type: 'bar',
                        label: 'Capacitación',
                        backgroundColor: "#009EF7",
                        data: capacitación
                    },
                ]
            }
            this.chart?.update();
            this.cdn.detectChanges();

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
