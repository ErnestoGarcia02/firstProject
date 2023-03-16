import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPlantasPage } from './info-plantas.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPlantasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPlantasPageRoutingModule {}
