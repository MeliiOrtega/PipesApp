import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas:number = 25000858598;
  porcentaje:number = 0.48;

  constructor() { }

  ngOnInit(): void {
  }

}
