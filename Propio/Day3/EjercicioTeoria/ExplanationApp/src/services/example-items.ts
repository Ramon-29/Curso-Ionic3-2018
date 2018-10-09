import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

export interface Item {
    title: string;
    note: string;
    icon: string;
    euroPrice: number;
}

@Injectable()
export class ExampleItemsService {



    constructor() {

    }

    getExampleItems(): Item[] {
        // Let's populate this page with some filler content for funzies
        const icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];

        const items = [];
        for (let i = 1; i < 11; i++) {
            items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: icons[Math.floor(Math.random() * icons.length)],
                euroPrice: Math.random() * 5
            });
        }
        return items;
    }

    getExampleItemsDelayed(): Subject<Item[]>{
        
        // Paquete de promesa
        const itemAvailable = new Subject<Item[]>();

        setTimeout(() => {
            itemAvailable.next(this.getExampleItems());
        }, 2000);

        return itemAvailable;
    }

}