import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Mostrar } from './mostrar';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  URL = "http://localhost/Tesis/BackEnd/clientes/";
  
  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Mostrar[]>{
    return this.httpClient.get<Mostrar[]>(this.URL + 'seleccionar.php');
  }

  // public individual(id: UltimosId): Observable<Novedades>{
  //   return this.httpClient.get<Novedades>(this.URL + `seleccionar.php?id=${id}`);
  // } 
 
/*
  public crear(cursos: Novedades): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'agregar.php', cursos);
  }


  public actualizar(cursos: Novedades): Observable<any>{
    return this.httpClient.put<any>(this.URL + 'editar.php', cursos);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `eliminar.php?id=${id}`);
  }
 */

}

