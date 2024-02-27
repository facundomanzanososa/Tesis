import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AgregarComponent } from './component/agregar/agregar.component';
import { BuscarComponent } from './component/buscar/buscar.component';
import { FacturarComponent } from './component/facturar/facturar.component';
import { StockComponent } from './component/stock/stock.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Agregar', component: AgregarComponent},
  {path: 'Buscar', component: BuscarComponent},
  {path: 'Facturar', component: FacturarComponent},
  {path: 'Stock', component: StockComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
