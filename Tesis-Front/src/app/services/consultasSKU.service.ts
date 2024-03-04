import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SKU } from '../models/sku';
import {Agregar } from '../models/agregar';

@Injectable({
  providedIn: 'root'
})
export class ConsultasSKUService {

  URL = "http://localhost/Tesis/BackEnd/clientes2/";
  
  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<SKU[]>{
    return this.httpClient.get<SKU[]>(this.URL + 'seleccionar.php');
  }
  public crear(producto: Agregar): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'agregar.php', producto);
  }
  public borrar(): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `eliminar.php`);
  }
 

}
