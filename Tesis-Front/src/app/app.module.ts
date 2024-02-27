import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './component/stock/stock.component';
import { AgregarComponent } from './component/agregar/agregar.component';
import { BuscarComponent } from './component/buscar/buscar.component';
import { FacturarComponent } from './component/facturar/facturar.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    AgregarComponent,
    BuscarComponent,
    FacturarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
