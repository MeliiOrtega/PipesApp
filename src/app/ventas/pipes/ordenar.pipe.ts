import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], orden:string): Heroe[]{ //TODOS LOS ARG ...args

    switch (orden) {
      case 'nombre':
        return value.sort((a,b) => (a.nombre > b.nombre)? 1 : -1);
      case 'color':
        return value.sort((a,b) => (a.color > b.color)? 1 : -1);
      case 'vuela':
        return value.sort((a,b) => (a.vuela > b.vuela)? -1 : 1);
    
      default:
        return value;
    }
    
    
    /* if(orden === ''){
    
    }
    else if(orden === 'nombre'){
      
    }else if(orden === 'color'){
      value = value.sort((a,b) => (a.color > b.color)? 1 : -1);
    }else if(orden === 'vuela'){
      value = value.sort((a,b) => (a.vuela > b.vuela)? 1 : -1);
    }
    return value; */

    /* FUNCIONA [2,4,3,5]
    sort((a,b) => (a: 2 > b: 4) falso = -1 2[0], 4[1])
    sort((a,b) => (a: 4 > b: 3) verdade = 1 3[1], 4[2])
    sort((a,b) => (a: 4 > b: 5) falso = -1 4[2], 5[3])
    resultado 2,3,4,5
    */
    

  }

}
