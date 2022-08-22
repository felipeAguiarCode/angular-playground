import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformador'
})
export class TransformadorPipe implements PipeTransform {

  transform(value: unknown, name:any, token:any): unknown {
    return value + ' - ' + name + ' - ' + token;
  }

}
