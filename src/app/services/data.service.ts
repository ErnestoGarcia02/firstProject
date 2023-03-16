import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  consumo: number|null=null;
  capMax: number=20;
  porcentaje: number|null=null;
  
  constructor() { }
}
