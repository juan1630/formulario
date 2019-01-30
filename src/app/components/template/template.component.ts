import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
 
  usuario:object = {
    nombre:null,
    apellido:null,
    correo:null,
    pais:"",
    sexo:"Hombre",
    acepta:false
  }

  paises=[{ codigo:"CRI", pais:"Costarica" }, { codigo:"MEX", pais:"Mexico" } ];
  sexos:string[]=[ "Hombre", "Mujer", "Sin definir"];

  constructor() { }
  ngOnInit() {
  }


  guardar( forma:NgForm  ){
    console.log('ngForm:', forma );
      //  console.log('Valor:', forma.value );
     //   console.log( 'Usuario:' , this.usuario  )
  }

}
