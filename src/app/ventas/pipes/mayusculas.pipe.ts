import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";


@Pipe({
  name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform{

  transform(value:string, opcion:boolean = true):string{
    /* if(opcion){
    return value.toUpperCase();
    }else{
      return value.toLowerCase();
    } */

    return (opcion)? value.toUpperCase() : value.toLowerCase();
  }
  
}