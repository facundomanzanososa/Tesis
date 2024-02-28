import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

import { ConsultasService } from 'src/app/services/consultas.service';
import { Agregar } from 'src/app/models/agregar';

import { Loading, Notify } from 'notiflix';

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

  

  constructor(public fb: FormBuilder, private agregarS: ConsultasService, private router: Router) { 
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
   
    
  }
  agregarproducto(): void {
    const zona=19;
    const producto = new Agregar(
      this.form.value.SKU,
      this.form.value.RFID,
      zona,
      this.form.value.Marca,
      this.form.value.Talle,
      this.form.value.Sexo,
      );
      console.log(producto);
      this.agregarS.crear(producto).subscribe(
        data => {
          // console.log(data);
          Notify.success('¡Operación exitosa!');
    
             this.router.navigate(['']);
             Loading.remove();
    
           }, err => {
             Notify.failure('¡Ups! Algo salió mal');
             this.router.navigate(['']);
             Loading.remove();
    
           }
         )
      
  }
}
