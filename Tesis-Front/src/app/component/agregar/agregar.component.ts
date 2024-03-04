import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

import { ConsultasService } from 'src/app/services/consultas.service';
import { ConsultasSKUService } from 'src/app/services/consultasSKU.service';

import { Agregar } from 'src/app/models/agregar';
import { SKU } from 'src/app/models/sku';

import { Loading, Notify } from 'notiflix';
import { Block } from 'notiflix/build/notiflix-block-aio';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  
  SKU: number=0;
  RFID: number=0;
  Zona: number=19;
  Marca: string='';
  Talle: number=0;
  Sexo: number=0;
  
  form: FormGroup;
  sku: SKU[] = [
    new SKU(0,0, "asd")
  ];

  

  constructor(public fb: FormBuilder, private agregarS: ConsultasService, private skuS: ConsultasSKUService, private router: Router) { 
    this.form= this.fb.group({
      SKU: [''],
      RFID: [''],
      Zona: [''],
      Marca: [''],
      Talle: [''],
      Sexo: [''],
    })
  }

  ngOnInit(): void {
    Block.dots('.subcontenidoImportante', 'Esperando SKU y RFID');

    this.cargarSKU();
    
    
  }
  cargarSKU(): void {
    const intervalo = interval(2000); // Intervalo de 2 segundos
    
    intervalo.subscribe(() => {
      this.skuS.lista().subscribe(data => {
        this.sku = data;
        console.log(data);
        
        if (data.length === 0) {

          Block.dots('.subcontenidoImportante', 'Esperando SKU y RFID');
          
  
        } else {
          // Detener el intervalo una vez que se reciban los datos
          // intervalo.unsubscribe();
          Block.remove('.subcontenidoImportante');
        }
      });
    });
  }
  agregarproducto(): void {

    if(this.sku[0].SKU==0 || this.sku[0].RFID==0 ){
      Notify.failure('¡Falta SKU y RFID');

    }
    else{

    
    Loading.standard('Cargando...');

    const zona=19;
    const producto = new Agregar(
      this.sku[0].SKU,
      this.sku[0].RFID,
      zona,
      this.form.value.Marca,
      this.form.value.Talle,
      this.form.value.Sexo,
      );
      console.log(producto);
      this.agregarS.crear(producto).subscribe(
        data => {
            this.skuS.borrar().subscribe(
              data => {
                Notify.success('¡Operación exitosa!');
                Loading.remove();
                this.router.navigate(['']);
              }
            )
           }, err => {
             Notify.failure('¡Ups! Algo salió mal');
             this.router.navigate(['']);
             Loading.remove();
    
           }
         )
        }
      
  }
}
