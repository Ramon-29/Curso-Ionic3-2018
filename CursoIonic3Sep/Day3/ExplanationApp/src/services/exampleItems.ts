import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

export interface ExampleItem {
  title: string,
  note: string
  icon: string,
  euroPrice: number
};

@Injectable()
export class ExampleItemsService {

  private exampleItems: [ExampleItem];

  constructor() {

  }

  getExampleItems(): [ExampleItem] {

    if(this.exampleItems) {

      return this.exampleItems;

    } else {

      let icons = ['flask', 'wifi', 'beer', 'football',
        'basketball', 'paper-plane', 'american-football',
        'boat', 'bluetooth', 'build'];

      this.exampleItems = <[ExampleItem]>[];

      for (let i = 1; i < 11; i++) {

        this.exampleItems.push({
          title: 'Item ' + i,
          note: 'This is item #' + i,
          icon: icons[Math.floor(Math.random() * icons.length)],
          euroPrice: Math.random() * 5
        });
      }

      return this.exampleItems;
    }
  }

  getExampleItemsDelayed(): Subject<[ExampleItem]> {

    const itemsAvailable = new Subject<[ExampleItem]>();

    setTimeout(() => {

      itemsAvailable.next(this.getExampleItems());

    }, 2000);

    return itemsAvailable;
  }
}
