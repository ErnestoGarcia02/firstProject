import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js-light';
// import { Script } from 'vm';
import { DataService } from '../services/data.service';
import { RealtimeDatabaseService } from '../services/realtime-database.service';

@Component({
  selector: 'app-info-plantas-dos',
  templateUrl: './info-plantas-dos.page.html',
  styleUrls: ['./info-plantas-dos.page.scss'],
})
export class InfoPlantasDosPage implements OnInit {
  data: any;

  capMaxsm53 = 20; // Capacidad máxima predeterminada: 20 litros
  capacidades: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]; //Lista de capacidades

  constructor(
    private dataService: RealtimeDatabaseService,
    private infoService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
      this.capMaxsm53 = this.data.capMax;
    });
  }

  handleChange(ev: any) {
    this.capMaxsm53 = ev.target.value;
    this.infoService.capMax = this.capMaxsm53;
    this.dataService.updateCapMax(this.capMaxsm53);
    // this.infoService.porcentaje = (this.data.litros / this.capMaxsm53) * 100;
  }
}
