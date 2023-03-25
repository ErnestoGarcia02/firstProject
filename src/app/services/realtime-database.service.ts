import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class RealtimeDatabaseService {

  constructor(private db: AngularFireDatabase) { }

  getData() {
    //documento de la base de datos
    return this.db.object('Flujo de Agua Sombra').valueChanges();
  }

  updateCapMax(value: number, isDefaultCapMax=true){
    let data
    if(!isDefaultCapMax){
      data={capMax51: value};
    }else{
      data={capMax: value};
    }
    
    this.db.object(`Flujo de Agua Sombra`).update(data);
  }
}
