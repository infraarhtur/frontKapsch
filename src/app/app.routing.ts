import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
//   import {UsuarioModule} from 'src/app/modules/usuario/usuario.module';
// import { CreditoModule } from './modules/credito/credito.module';
// //#region Componentes
 import { HomeComponent } from './general/components/home/home.component';
//#endregion Componentes

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
