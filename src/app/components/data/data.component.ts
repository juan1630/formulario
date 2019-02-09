import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html'
})
export class DataComponent  {

  forma:FormGroup;

  usuario:any={
  
    nombreCompleto:{
      nombre:"",
      apellido:""
    }, 

    correo:"juan@gmail.com",
    pasatiempos:["Correr"]
  }

  constructor() { 
    console.log(this.usuario);

    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre':new FormControl('', [Validators.required,
                                     Validators.minLength(3)]),
        'apellido':new FormControl('', [Validators.required, 
                                        this.noHerrera])
        }),       
        
        'correo':new FormControl('' , [Validators.required,
                                  Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
          'pasatiempos': new FormArray([ new FormControl('',  Validators.required)]),
          'username': new FormControl('', Validators.required, this.existeUsuario),
          'password1': new FormControl('', Validators.required),
          'password2': new FormControl( '', Validators.required) 
  
          //validators de tipo pattern
 
    })
   
//this.forma.setValue( this.usuario );
//debe tener la misma estrucutra que el objeto

this.forma.controls['password2'].setValidators([
  Validators.required, this.noIgual.bind( this.forma )
])

this.forma.controls['username'].valueChanges
          .subscribe( (data)=>{
            console.log(data)
          } )

          this.forma.controls['username'].statusChanges
          .subscribe( (data)=>{
            console.log(data)
          } )

}

  ngOnInit() {

    console.log(this.forma.value)
    console.log(this.forma)
  }

  agergarPasatiempo(){
(<FormArray> this.forma.controls['pasatiempos']).push(
  new FormControl("Dormir", Validators.required)
)

  }

  noHerrera( control:FormControl ){
      if(control.value=="herrera"){
        return {
          noHerrera:true
        }
      }
      return null;
  }

  noIgual( control:FormControl ){
    //console.log(this);

    let forma:any = this;

    if(control.value !== forma.controls['password1'].value){
      return {
        noIgual:true
      }
    }
    return null;
  }


  existeUsuario( control: FormControl ): Promise <any>|Observable<any>{

    let promesa = new Promise(
      (resolve, reject)=>{ 
        setTimeout(()=> { 
            if(control.value == "Juancho" ){
              resolve({ existe:true });
            }else{
              resolve(null)
            }
         }, 3000)
       }
    )
        return promesa;
  }


  guardarCambios(){
    console.log(this.usuario);
   /* this.forma.reset({
      nombreCompleto:{
        nombre:"",
        apellido:""
      },correo:""
    } )
 */
    // restablece el ng pisting

  }

}
