import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficaDosPage } from './grafica-dos.page';

const routes: Routes = [
  {
    path: '',
    component: GraficaDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficaDosPageRoutingModule {}
