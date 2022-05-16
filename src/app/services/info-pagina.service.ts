import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina={};
  cargada=false;
  equipo: any[]=[];

  constructor(private http:HttpClient) {
    console.log("Servicos de la pagina creados");
    this.cargarInfo();
    this.cargarEquipo();

  }
  private cargarInfo(){
 //leer json
 this.http.get('assets/data/data-pagina.json')
 .subscribe( (resp: InfoPagina) => {
   this.cargada=true;
   this.info=resp;
 });
  }
  private cargarEquipo(){
    //leer datos equipo
 this.http.get('https://angular-template-871a5-default-rtdb.firebaseio.com/equipo.json')
 .subscribe( (resp: any) => {
   this.equipo=resp;
   console.log( resp );
 });
  }
}
