import { Component, OnInit } from '@angular/core';
import { color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  valor:boolean = false;
  ordenar:string = '';

  heroes:Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: color.negro
    },
    {
      nombre: 'Linterna',
      vuela: true,
      color: color.verde
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: color.rojo
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: color.rojo
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  Cambiar(){
     /*  (this.valor)? this.valor = false : this.valor = true; */
      //o
      this.valor = !this.valor;
  }

  ordenarOrden(orden:string){
    this.ordenar = orden;
  }

  
}
