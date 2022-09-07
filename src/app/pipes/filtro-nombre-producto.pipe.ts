import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroNombreProducto'
})
export class FiltroNombreProductoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log(value, arg);
    if (arg === '' || arg.length < 3) return value;
    
    const resultado = [];
    for (const listado of value) {
      if (listado.nombre.indexOf(arg) > -1) {
        resultado.push(listado);
      };
    };
    return resultado;
  }

}
