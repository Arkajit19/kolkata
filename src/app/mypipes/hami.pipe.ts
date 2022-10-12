import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hami'
})
export class HamiPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const[x]=args
    return value*x;
  }

}
