import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // { 
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'grafica',
    loadChildren: () => import('./grafica/grafica.module').then( m => m.GraficaPageModule)
  },  {
    path: 'info-plantas',
    loadChildren: () => import('./info-plantas/info-plantas.module').then( m => m.InfoPlantasPageModule)
  },
  {
    path: 'info-plantas-dos',
    loadChildren: () => import('./info-plantas-dos/info-plantas-dos.module').then( m => m.InfoPlantasDosPageModule)
  },
  {
    path: 'grafica-dos',
    loadChildren: () => import('./grafica-dos/grafica-dos.module').then( m => m.GraficaDosPageModule)
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
