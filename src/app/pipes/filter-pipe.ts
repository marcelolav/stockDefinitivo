import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultado = [];
    for (const listado of value) {
      if (listado.fecha.indexOf(arg) > -1) {
        resultado.push(listado);
      };
    };
    return resultado;
  }
  
}
