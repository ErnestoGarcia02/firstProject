import { AfterViewInit,
  Component,
  ElementRef, OnInit, ViewChild,  } from '@angular/core';
  import { Chart } from 'chart.js/auto';
import { type } from 'os';
import { DataService } from '../services/data.service';
import { RealtimeDatabaseService } from '../services/realtime-database.service';

@Component({
  selector: 'app-grafica-dos',
  templateUrl: './grafica-dos.page.html',
  styleUrls: ['./grafica-dos.page.scss'],
})
export class GraficaDosPage implements AfterViewInit {
  @ViewChild('doughnutCanvas') private doughnutCanvas!: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas!: ElementRef;
  doughnutChart: any;
  lineChart: any;
  data: any;
  capMax51: any;
  litros51: any;
  porcentaje51:any;
  constructor(private infoService: DataService, private realService: RealtimeDatabaseService) { }

  ngOnInit() {
    this.realService.getData().subscribe(data=>{
      this.data = data,
      this.capMax51=this.data.capMax51;
      this.litros51=this.data.litros51;
      this.infoService.consumo51 = this.data.litros51;
      this.doughnutChartMethod();
      this.lineChartMethod();
    });
  }
  ngAfterViewInit() {

  }
  doughnutChartMethod(){
    if(this.doughnutChart){
      this.doughnutChart.destroy();
    }
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

    type: 'doughnut',
    data: {
      labels: ['Consumidos', 'Por consumir'],
      datasets: [{
        label: 'litros',
        // Litros consumidos / capacidad máxima
        data: this.getChartData(this.litros51, this.capMax51),
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          
          'rgba(54, 162, 235, 0.2)',
          
        ],
        hoverBackgroundColor: [
          '#FFCE56',
          
          '#36A2EB',
          
        ]
      }]
    }



  });

  }

  lineChartMethod() {
    if(this.lineChart){
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: [ 'Sábado', 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        datasets: [
          {
            label: 'Litros',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [6.23, 10.57, 15.72, 5.51, 11.21, 8.12, 13.78],
            spanGaps: false,
          }
        ]
      }
    });
  }
//data: [consumidos, capMax - consumidos]
  getChartData(litrosConsumidos51: number, capacidadMax51: number):number[]{
    if(litrosConsumidos51>capacidadMax51){
      return [capacidadMax51, 0];
    }else{
      //data: [consumidos, capMax - consumidos]
      // return[litrosConsumidos, capacidadMax-litrosConsumidos]
      return[litrosConsumidos51, capacidadMax51-litrosConsumidos51]
    }
  }

}