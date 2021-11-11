import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

//PLURAL
clientes:string[] = ['maria', 'juan', 'eduardo'];

clientesMapa={
  '=0': 'no tenemos cliente esperando',
  '=1': 'tenemos 1 cliente esperando',
  'other': 'tenemos # clientes esperando'
}

borrarCliente(){
  this.clientes.pop();
}

  //SELECT
nombre:string = "Fernando";
genero:string = 'masculino';

invitacionMapa={
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}

cambiarCliente(){
  if(this.genero === 'masculino'){
    this.nombre = 'Maria';
    this.genero = 'femenino'
  }else {
    this.nombre = 'Fernando';
    this.genero = 'masculino';
  }
}

//KEY PIP
persona = {
  nombre: 'Genesis',
  edad: 23,
  direccion:'guasmo sur'
}

//JSON
heroes = [
  {
    nombre: 'superman',
    vuela: true
  },
  {
    nombre: 'batman',
    vuela: false
  },
  {
    nombre: 'irom man',
    vuela: true
  }

];

//async pipe
miObservable = interval(1000);
valorPromesa = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve('Fin de la promesa');
  },6500 );
})


}
