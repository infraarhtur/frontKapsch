import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Operador } from '../models/operador';


@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  public urlBase = '';
  constructor(private http: HttpClient) {
    this.urlBase = environment.urlBaseServicio;
   }


   obtenerOperadores() {
    const url = `${this.urlBase}/api/operador`;
    return this.http.get<Operador[]>(url);
  }
}
