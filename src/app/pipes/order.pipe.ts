import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform<T>(array: Array<T>, args: string): Array<T> {
    return array.sort((a: any, b: any) => {
      if (a[args].toLowerCase() < b[args].toLowerCase()) {
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
