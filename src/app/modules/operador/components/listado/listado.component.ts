import { Component, OnInit } from '@angular/core';
import { OperadorService } from '../../../../services/operador.service';
import { Operador } from '../../../../models/operador';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  operadores :Operador[]= [];
  constructor(private _operadorService: OperadorService) { }

  ngOnInit(): void {
    this._operadorService.obtenerOperadores().subscribe(res => this.operadores = res);
  }


}
