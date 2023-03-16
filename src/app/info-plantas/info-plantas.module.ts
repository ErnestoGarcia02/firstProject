import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPlantasPageRoutingModule } from './info-plantas-routing.module';

import { InfoPlantasPage } from './info-plantas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPlantasPageRoutingModule
  ],
  declarations: [InfoPlantasPage]
})
export class InfoPlantasPageModule {}
