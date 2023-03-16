import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPlantasDosPage } from './info-plantas-dos.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPlantasDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPlantasDosPageRoutingModule {}
