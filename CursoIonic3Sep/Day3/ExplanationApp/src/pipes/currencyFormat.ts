import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  constructor() {

  }

  transform(euroPrice: number, currency?: string): string {

    switch(currency) {

      case 'euro':
        return euroPrice.toFixed(2) + '€';

      case 'dollar':
        return '$' + (euroPrice * 1.18).toFixed(2);

      case 'pound':
        return '£' + (euroPrice * 0.88).toFixed(2);

      default:
        return `PIPE error (${euroPrice}, ${currency})`;
    }
  }
}
