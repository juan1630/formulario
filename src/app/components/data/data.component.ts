import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html'
})
export class DataComponent  {

  forma:FormGroup;

  usuario:any={
  
    nombreCompleto:{
      nombre:"Juan",
      apellido:"Patrón"
    }, 

    correo:"juan@gmail.com"
  }

  constructor() { 
    console.log(this.usuario);

    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre':new FormControl(this.usuario.nombreCompleto.nombre, [Validators.required,
                                      Validators.minLength(3)]),
        'apellido':new FormControl(this.usuario.nombreCompleto.apellido, [Validators.required, 
                                        Validators.minLength(3)])
        }),       
        
        'correo':new FormControl(this.usuario.correo , [Validators.required,
                                  Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
  
  

    })
   
this.forma.setValue( this.usuario );

}

  ngOnInit() {

    console.log(this.forma.value)
    console.log(this.forma)
  }


  guardarCambios(){
    console.log(this.usuario);
  }

}
