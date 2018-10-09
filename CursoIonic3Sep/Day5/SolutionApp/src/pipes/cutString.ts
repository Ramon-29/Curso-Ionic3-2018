import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString'
})
export class CutStringPipe implements PipeTransform {

  constructor() {

  }

  transform(str: string, length?: number): string {

    return str.slice(0, length) + '...';
  }
}
