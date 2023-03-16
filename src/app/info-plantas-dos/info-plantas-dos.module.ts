import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPlantasDosPageRoutingModule } from './info-plantas-dos-routing.module';

import { InfoPlantasDosPage } from './info-plantas-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPlantasDosPageRoutingModule
  ],
  declarations: [InfoPlantasDosPage]
})
export class InfoPlantasDosPageModule {}
