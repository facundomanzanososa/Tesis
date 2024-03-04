import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Mostrar } from '../models/mostrar';
import {Agregar } from '../models/agregar';

@Injectable({
  providedIn: 'root'
})
export class ConsultasSKUService {

  URL = "http://localhost/Tesis/BackEnd/clientes2/";
  
  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Mostrar[]>{
    return this.httpClient.get<Mostrar[]>(this.URL + 'seleccionar.php');
  }
  public crear(producto: Agregar): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'agregar.php', producto);
  }
  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `eliminar.php?id=${id}`);
  }
 

}
