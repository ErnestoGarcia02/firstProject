import { AfterViewInit,
  Component,
  ElementRef, OnInit, ViewChild,  } from '@angular/core';
  import { Chart } from 'chart.js/auto';
import { type } from 'os';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.page.html',
  styleUrls: ['./grafica.page.scss'],
})
export class GraficaPage implements AfterViewInit {
  @ViewChild('doughnutCanvas') private doughnutCanvas!: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas!: ElementRef;
  doughnutChart: any;
  lineChart: any;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.doughnutChartMethod();
  }
  doughnutChartMethod(){
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

    type: 'doughnut',
    data: {
      labels: ['BJP', 'Congress', 'AAp', 'CPM', 'SP'],
      datasets: [{
        label: '# of Votes',
        data: [50, 29, 15, 10, 7],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132. 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)' 
        ],
        hoverBackgroundColor: [
          '#FFCE56',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384'
        ]
      }]
    }



  });

  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Sell per week',
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
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          }
        ]
      }
    });
  }


}