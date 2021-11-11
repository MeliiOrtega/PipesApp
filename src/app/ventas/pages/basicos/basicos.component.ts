import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  nombreLower:string = 'genesis';
  nombreUpper:string = 'GENESIS';
  nombreCompleto:string = 'GenesiS MElissa';

  fecha:Date = new Date(); // dia de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
