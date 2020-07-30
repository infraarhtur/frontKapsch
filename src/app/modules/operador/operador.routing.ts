import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//#region components
import { MainComponent } from './components/main/main.component';
import { ListadoComponent } from './components/listado/listado.component';
// import { CrearComponent } from './components/crear/crear.component';
// import { EditarComponent } from './components/editar/editar.component';

//#endregion components


const OperadorRoutes: Routes = [{
  path: 'Operador', component: MainComponent,

  children: [
    { path: '', redirectTo: 'listado', pathMatch: 'full' },
    { path: 'listado', component: ListadoComponent},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(OperadorRoutes)],
exports: [RouterModule]
})
export class OperadorRoutingModule { }
