import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform{

    constructor(){

    }

    transform(value: number, currency: string): string {
        if(currency === 'dollar'){
            return '$ ' + (value * 1.10).toFixed(2);
        }else{
            return value.toFixed(2) + '€';
        }
        
    }

}