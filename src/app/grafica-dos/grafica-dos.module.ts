import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficaDosPageRoutingModule } from './grafica-dos-routing.module';

import { GraficaDosPage } from './grafica-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficaDosPageRoutingModule
  ],
  declarations: [GraficaDosPage]
})
export class GraficaDosPageModule {}
