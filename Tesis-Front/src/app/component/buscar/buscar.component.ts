import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';

import { ConsultasService } from 'src/app/services/consultas.service';
import { Mostrar } from 'src/app/models/mostrar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {
  
  producto: Mostrar = new Mostrar(0, 0, 0, '', '', '', 0, 0);
  mostrar:boolean=false;


  
  form: FormGroup;

  constructor(public fb: FormBuilder, private mostrarS: ConsultasService, private router: Router) { 
    this.form = this.fb.group({
      id: [null, Validators.required] // Agregamos Validators.required para requerir un valor en el campo 'id'
    });
  }
  ngOnInit(): void {
  }



  buscarproducto(): void {
      console.log(this.form.value.id);
      
    Loading.standard('Cargando...');    
    this.mostrarS.individual(this.form.value.id).subscribe(
      data =>{
        if ((Array.isArray(data) && data.length === 0)) {
        Notify.failure('Producto no disponible');

          this.mostrar = false;
        } else {
          this.producto = data;
          this.mostrar = true;
        }
        Loading.remove();
      }, err =>{
        Notify.failure('¡Ups! Algo salió mal');
        this.router.navigate(['']);
        this.mostrar=false;
        Loading.remove();
      }
    )
  }
}
