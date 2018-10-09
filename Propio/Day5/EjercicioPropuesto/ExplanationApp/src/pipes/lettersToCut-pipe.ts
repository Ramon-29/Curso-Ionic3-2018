import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'lettersToCut'})
export class lettersToCutPipe implements PipeTransform {
  transform(content: string, number: number): string {
    return content.substring(0, number).concat("...");
  }
}