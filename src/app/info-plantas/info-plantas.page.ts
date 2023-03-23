import { Component, OnInit } from '@angular/core';
import { RealtimeDatabaseService } from '../services/realtime-database.service';

@Component({
  selector: 'app-info-plantas',
  templateUrl: './info-plantas.page.html',
  styleUrls: ['./info-plantas.page.scss'],
})
export class InfoPlantasPage implements OnInit {

  data: any; 
  
  capMax51 = 20; // Capacidad máxima predeterminada: 20 litros
  capacidades: number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //Lista de capacidades

   constructor(private dataService: RealtimeDatabaseService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
    this.data = data;
    console.log(this.data);
    });
  }

  handleChange(ev: any) {
    this.capMax51 = ev.target.value;
  }
}
