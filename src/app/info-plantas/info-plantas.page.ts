import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js-light';
// import { Script } from 'vm';
import { DataService } from '../services/data.service';
import { RealtimeDatabaseService } from '../services/realtime-database.service';

@Component({
  selector: 'app-info-plantas',
  templateUrl: './info-plantas.page.html',
  styleUrls: ['./info-plantas.page.scss'],
})
export class InfoPlantasPage implements OnInit {

  data: any; 
  
  capMaxsm51 = 20; // Capacidad máxima predeterminada: 20 litros
  capacidades: number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //Lista de capacidades

  constructor(private dataService: RealtimeDatabaseService, private infoService: DataService) { }

  ngOnInit() {
      this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.capMaxsm51=this.data.capMax51;
    });  
  }

  handleChange(ev: any) {
    this.capMaxsm51 = ev.target.value;
    this.infoService.capMax51 = this.capMaxsm51;
    this.dataService.updateCapMax(this.capMaxsm51, false);
    // this.infoService.porcentaje51 = this.data.litros51/this.capMaxsm51*100;
  }
}
