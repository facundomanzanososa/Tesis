import { Component } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Mostrar } from 'src/app/services/mostrar';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {
  productos: Mostrar[] = [];

  constructor(private mostrarS: ConsultasService) {}

  ngOnInit(): void {
   
    this.cargarNovedades();
    
  }
  cargarNovedades(): void {
    this.mostrarS.lista().subscribe(data => {
      this.productos = data;
    })
  }
}
