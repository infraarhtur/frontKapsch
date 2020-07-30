import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './components/listado/listado.component';
import { MainComponent } from './components/main/main.component';
import { OperadorRoutingModule } from './operador.routing';



@NgModule({
  declarations: [ListadoComponent, MainComponent],
  imports: [
    CommonModule,OperadorRoutingModule
  ]
})
export class OperadorModule { }
